function createSkillRadarChart() {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;
    
    const radarContainer = document.createElement('div');
    radarContainer.className = 'radar-container';
    radarContainer.innerHTML = `
        <canvas id="skillRadarChart" width="400" height="400"></canvas>
    `;
    
    skillsSection.insertBefore(radarContainer, skillsSection.querySelector('.skills-grid'));
    
    drawRadarChart();
}

function drawRadarChart() {
    const canvas = document.getElementById('skillRadarChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;
    const currentLang = localStorage.getItem('language') || 'zh';
    
    const skillNames = {
        zh: ['编程', '机器人', 'AI/ML', '计算机视觉', '控制工程', '设计'],
        en: ['Programming', 'Robotics', 'AI/ML', 'Computer Vision', 'Control Engineering', 'Design']
    };
    
    const skills = [
        { name: skillNames[currentLang][0], value: 85 },
        { name: skillNames[currentLang][1], value: 90 },
        { name: skillNames[currentLang][2], value: 80 },
        { name: skillNames[currentLang][3], value: 75 },
        { name: skillNames[currentLang][4], value: 85 },
        { name: skillNames[currentLang][5], value: 70 }
    ];
    
    const numSkills = skills.length;
    const angleStep = (2 * Math.PI) / numSkills;
    
    for (let level = 1; level <= 5; level++) {
        ctx.beginPath();
        for (let i = 0; i < numSkills; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const x = centerX + (radius * level / 5) * Math.cos(angle);
            const y = centerY + (radius * level / 5) * Math.sin(angle);
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.strokeStyle = 'rgba(100, 181, 246, 0.3)';
        ctx.stroke();
    }
    
    for (let i = 0; i < numSkills; i++) {
        const angle = i * angleStep - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
        ctx.strokeStyle = 'rgba(100, 181, 246, 0.5)';
        ctx.stroke();
        
        const labelX = centerX + (radius + 25) * Math.cos(angle);
        const labelY = centerY + (radius + 25) * Math.sin(angle);
        ctx.fillStyle = '#1976d2';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skills[i].name, labelX, labelY);
    }
    
    ctx.beginPath();
    for (let i = 0; i < numSkills; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const value = skills[i].value / 100;
        const x = centerX + radius * value * Math.cos(angle);
        const y = centerY + radius * value * Math.sin(angle);
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(100, 181, 246, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#1976d2';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    for (let i = 0; i < numSkills; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const value = skills[i].value / 100;
        const x = centerX + radius * value * Math.cos(angle);
        const y = centerY + radius * value * Math.sin(angle);
        
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = '#1976d2';
        ctx.fill();
    }
}

function getTranslation(key) {
    const currentLang = localStorage.getItem('language') || 'zh';
    if (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang][key]) {
        return translations[currentLang][key];
    }
    const fallback = {
        zh: {
            projectTimeline: '📅 项目时间线',
            ceramicPowderProject: '陶瓷粉末压铸成型自动下料设备控制系统',
            nationalFirstPrize3DContest: '第十七届全国三维数字化创新设计大赛 - 国家一等奖',
            rosInspectionRobot: '基于ROS的自主智能巡检机器人系统',
            nationalThirdPrizeRobotContest: '第二十六届中国机器人及人工智能大赛 - 全国总决赛三等奖',
            enterTaizhouUniversity: '入学泰州学院',
            startRoboticsMajor: '开始机器人工程专业学习（2023-2027）',
            totalCertificates: '荣誉证书',
            nationalFirstPrize: '国家级一等奖',
            intellectualProperty: '知识产权',
            studyYears: '学习年限'
        },
        en: {
            projectTimeline: '📅 Project Timeline',
            ceramicPowderProject: 'Ceramic Powder Die Casting Automatic Feeding Control System',
            nationalFirstPrize3DContest: '17th National 3D Digital Innovation Design Contest - National First Prize',
            rosInspectionRobot: 'ROS-based Autonomous Intelligent Inspection Robot System',
            nationalThirdPrizeRobotContest: '26th China Robot and Artificial Intelligence Competition - National Third Prize',
            enterTaizhouUniversity: 'Entered Taizhou University',
            startRoboticsMajor: 'Started Robotics Engineering (2023-2027)',
            totalCertificates: 'Certificates',
            nationalFirstPrize: 'National 1st Prize',
            intellectualProperty: 'Intellectual Property',
            studyYears: 'Study Years'
        }
    };
    return fallback[currentLang][key] || fallback.zh[key];
}

function createProjectTimeline() {
    const projectsSection = document.querySelector('.project-section');
    if (!projectsSection) return;
    
    const timelineContainer = document.createElement('div');
    timelineContainer.className = 'timeline-container';
    timelineContainer.innerHTML = `
        <h3 class="timeline-title">${getTranslation('projectTimeline')}</h3>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-date">2025</div>
                <div class="timeline-content">
                    <div class="timeline-title-item">${getTranslation('ceramicPowderProject')}</div>
                    <div class="timeline-desc">${getTranslation('nationalFirstPrize3DContest')}</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">2024</div>
                <div class="timeline-content">
                    <div class="timeline-title-item">${getTranslation('rosInspectionRobot')}</div>
                    <div class="timeline-desc">${getTranslation('nationalThirdPrizeRobotContest')}</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">2023</div>
                <div class="timeline-content">
                    <div class="timeline-title-item">${getTranslation('enterTaizhouUniversity')}</div>
                    <div class="timeline-desc">${getTranslation('startRoboticsMajor')}</div>
                </div>
            </div>
        </div>
    `;
    
    projectsSection.appendChild(timelineContainer);
}

function createAchievementStats() {
    const certificatesSection = document.querySelector('.certificates-section');
    if (!certificatesSection) return;
    
    const statsContainer = document.createElement('div');
    statsContainer.className = 'achievement-stats';
    statsContainer.innerHTML = `
        <div class="achievement-stat">
            <div class="achievement-icon">🏆</div>
            <div class="achievement-number">14</div>
            <div class="achievement-label">${getTranslation('totalCertificates')}</div>
        </div>
        <div class="achievement-stat">
            <div class="achievement-icon">🥇</div>
            <div class="achievement-number">1</div>
            <div class="achievement-label">${getTranslation('nationalFirstPrize')}</div>
        </div>
        <div class="achievement-stat">
            <div class="achievement-icon">💡</div>
            <div class="achievement-number">4</div>
            <div class="achievement-label">${getTranslation('intellectualProperty')}</div>
        </div>
        <div class="achievement-stat">
            <div class="achievement-icon">🎓</div>
            <div class="achievement-number">3</div>
            <div class="achievement-label">${getTranslation('studyYears')}</div>
        </div>
    `;
    
    certificatesSection.insertBefore(statsContainer, certificatesSection.querySelector('.certificates-grid'));
}

function updateVisualizations() {
    const timelineContainer = document.querySelector('.timeline-container');
    if (timelineContainer) {
        timelineContainer.remove();
        createProjectTimeline();
    }
    
    const statsContainer = document.querySelector('.achievement-stats');
    if (statsContainer) {
        statsContainer.remove();
        createAchievementStats();
    }
    
    drawRadarChart();
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        createSkillRadarChart();
        createProjectTimeline();
        createAchievementStats();
    }, 500);
});
