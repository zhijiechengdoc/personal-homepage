let analytics = {
    totalVisits: 0,
    sectionViews: {},
    referrer: document.referrer || 'direct'
};

function loadAnalytics() {
    const saved = localStorage.getItem('pageAnalytics');
    if (saved) {
        analytics = JSON.parse(saved);
    }
}

function saveAnalytics() {
    localStorage.setItem('pageAnalytics', JSON.stringify(analytics));
}

function trackVisit() {
    analytics.totalVisits++;
    saveAnalytics();
}

function trackSectionView(sectionId) {
    if (!analytics.sectionViews[sectionId]) {
        analytics.sectionViews[sectionId] = 0;
    }
    analytics.sectionViews[sectionId]++;
    saveAnalytics();
}

function setupSectionTracking() {
    const sections = document.querySelectorAll('section[id]');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    trackSectionView(entry.target.id);
                }
            });
        }, { threshold: 0.5 });
        
        sections.forEach(section => {
            observer.observe(section);
        });
    }
}

function displayAnalytics() {
    let html = '<div class="analytics-container">';
    html += '<h3 class="analytics-title">📊 访问统计</h3>';
    html += '<div class="analytics-grid">';
    
    html += '<div class="analytics-card">';
    html += '<div class="analytics-icon">👥</div>';
    html += '<div class="analytics-value">' + analytics.totalVisits + '</div>';
    html += '<div class="analytics-label">总访问次数</div>';
    html += '</div>';
    
    html += '<div class="analytics-card">';
    html += '<div class="analytics-icon">📍</div>';
    html += '<div class="analytics-value">' + (analytics.referrer === 'direct' ? '直接访问' : '外部链接') + '</div>';
    html += '<div class="analytics-label">访客来源</div>';
    html += '</div>';
    
    const sections = Object.entries(analytics.sectionViews)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);
    
    if (sections.length > 0) {
        html += '<div class="analytics-card">';
        html += '<div class="analytics-icon">🔥</div>';
        html += '<div class="analytics-value">' + getSectionName(sections[0][0]) + '</div>';
        html += '<div class="analytics-label">最热门板块</div>';
        html += '</div>';
    }
    
    html += '</div></div>';
    
    return html;
}

function getSectionName(id) {
    const names = {
        'about': '关于我',
        'education': '教育背景',
        'skills': '技能专长',
        'certificates': '证书荣誉',
        'projects': '项目经历',
        'works': '作品展示',
        'contact': '联系方式',
        'message': '留言板',
        'chat': '数字分身'
    };
    return names[id] || id;
}

function renderAnalytics() {
    const container = document.getElementById('analyticsSection');
    if (container) {
        container.innerHTML = displayAnalytics();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadAnalytics();
    trackVisit();
    setupSectionTracking();
    renderAnalytics();
});
