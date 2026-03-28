const skillsData = [
    {
        category: {
            zh: '🤖 机器人与自动化',
            en: '🤖 Robotics & Automation'
        },
        skills: [
            { name: { zh: 'PLC编程', en: 'PLC Programming' }, icon: '⚡', level: 85 },
            { name: { zh: '伺服控制', en: 'Servo Control' }, icon: '🎛️', level: 80 },
            { name: { zh: 'HMI设计', en: 'HMI Design' }, icon: '📱', level: 75 },
            { name: { zh: '电气原理图', en: 'Electrical Schematic' }, icon: '📐', level: 70 }
        ]
    },
    {
        category: {
            zh: '🧠 AI与计算机视觉',
            en: '🧠 AI & Computer Vision'
        },
        skills: [
            { name: { zh: 'ROS机器人操作系统', en: 'ROS Robot OS' }, icon: '🤖', level: 75 },
            { name: { zh: 'SLAM建图', en: 'SLAM Mapping' }, icon: '🗺️', level: 70 },
            { name: { zh: 'YOLOv5目标检测', en: 'YOLOv5 Object Detection' }, icon: '👁️', level: 75 },
            { name: { zh: 'OpenCV图像处理', en: 'OpenCV Image Processing' }, icon: '🖼️', level: 70 }
        ]
    },
    {
        category: {
            zh: '💻 软件开发',
            en: '💻 Software Development'
        },
        skills: [
            { name: { zh: 'Python', en: 'Python' }, icon: '🐍', level: 80 },
            { name: { zh: 'JavaScript', en: 'JavaScript' }, icon: '⚡', level: 65 },
            { name: { zh: 'HTML/CSS', en: 'HTML/CSS' }, icon: '🎨', level: 70 },
            { name: { zh: 'Git版本控制', en: 'Git Version Control' }, icon: '🔧', level: 65 }
        ]
    },
    {
        category: {
            zh: '🎨 其他技能',
            en: '🎨 Other Skills'
        },
        skills: [
            { name: { zh: '国画', en: 'Chinese Painting' }, icon: '🖌️', level: 90 },
            { name: { zh: '乒乓球', en: 'Table Tennis' }, icon: '🏓', level: 85 },
            { name: { zh: '内容表达', en: 'Content Presentation' }, icon: '📝', level: 80 },
            { name: { zh: '知识整理', en: 'Knowledge Organization' }, icon: '📚', level: 75 }
        ]
    }
];

let skillsAnimated = false;

function getSkillText(text, lang) {
    if (typeof text === 'object' && text !== null) {
        return text[lang] || text.zh || '';
    }
    return text || '';
}

function renderSkills() {
    const container = document.getElementById('skillsContainer');
    const currentLang = localStorage.getItem('language') || 'zh';
    container.innerHTML = '';

    skillsData.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        categoryDiv.innerHTML = `
            <div class="skill-category-title">${getSkillText(category.category, currentLang)}</div>
            ${category.skills.map(skill => `
                <div class="skill-item">
                    <div class="skill-header">
                        <div class="skill-name">
                            <span class="skill-icon">${skill.icon}</span>
                            ${getSkillText(skill.name, currentLang)}
                        </div>
                        <span class="skill-percentage">${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-bar-fill" data-level="${skill.level}"></div>
                    </div>
                </div>
            `).join('')}
        `;
        container.appendChild(categoryDiv);
    });

    setupSkillsObserver();
}

function updateSkillsLanguage() {
    renderSkills();
    skillsAnimated = false;
}

function setupSkillsObserver() {
    const skillsSection = document.getElementById('skills');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !skillsAnimated) {
                    animateSkillBars();
                    skillsAnimated = true;
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        observer.observe(skillsSection);
    } else {
        setTimeout(animateSkillBars, 500);
    }
}

function animateSkillBars() {
    const bars = document.querySelectorAll('.skill-bar-fill');
    bars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.width = bar.dataset.level + '%';
        }, index * 100);
    });
}
