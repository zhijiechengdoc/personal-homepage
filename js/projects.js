const defaultProjectData = [
    {
        icon: '🏭',
        title: {
            zh: '陶瓷粉末压铸成型自动下料设备控制系统设计',
            en: 'Ceramic Powder Die Casting Automatic Feeding Control System Design'
        },
        date: {
            zh: '2025.05 - 至今',
            en: '2025.05 - Present'
        },
        role: {
            zh: '第一主持人',
            en: 'First Host'
        },
        category: {
            zh: '机器人项目',
            en: 'Robotics Project'
        },
        description: {
            zh: [
                '负责基于 PLC+HMI+伺服控制的自动化下料系统设计与开发，实现陶瓷粉末压铸成型件的自动抓取、排列与装盘',
                '完成控制系统硬件选型（三菱 PLC、威伦通触摸屏、伺服驱动器、传感器等），绘制电气原理图与接线图',
                '使用 GX Works2 编写 PLC 梯形图程序，实现三轴位置控制、气动逻辑与安全互锁',
                '设计 HMI 人机界面，支持参数设置、状态监控、手动调试与故障报警功能',
                '进行整机调试与性能测试，系统定位精度达±0.5mm，支持多规格物料柔性生产'
            ],
            en: [
                'Responsible for the design and development of an automatic feeding system based on PLC+HMI+servo control, realizing automatic grasping, arrangement, and tray loading of ceramic powder die casting parts',
                'Completed hardware selection for the control system (Mitsubishi PLC, Weinview HMI, servo drives, sensors, etc.), and drew electrical schematics and wiring diagrams',
                'Wrote PLC ladder logic programs using GX Works2, achieving three-axis position control, pneumatic logic, and safety interlocks',
                'Designed HMI interface supporting parameter setting, status monitoring, manual debugging, and fault alarm functions',
                'Carried out complete machine commissioning and performance testing, with system positioning accuracy reaching ±0.5mm, supporting flexible production of multi-specification materials'
            ]
        },
        achievements: {
            zh: [
                '2025 年 6 月 第十七届全国三维数字化创新设计大赛江苏赛区特等奖',
                '2025 年 7 月 第十七届全国三维数字化创新设计大赛国家一等奖',
                '申请软件著作权《自动下料全过程监管系统 V1.0》（已受理，受理号：2025R11S0478727）',
                '《陶瓷粉末压铸成型下料配料智能计算软件 V1.0》软件著作权（已受理，受理号：2025SR1056196）'
            ],
            en: [
                'June 2025 - 17th National 3D Digital Innovation Design Contest Jiangsu Provincial Special Prize',
                'July 2025 - 17th National 3D Digital Innovation Design Contest National First Prize',
                'Applied for Software Copyright "Automatic Feeding Whole Process Supervision System V1.0" (Accepted, Application No.: 2025R11S0478727)',
                'Software Copyright "Ceramic Powder Die Casting Feeding Batching Intelligent Calculation Software V1.0" (Accepted, Application No.: 2025SR1056196)'
            ]
        }
    },
    {
        icon: '🤖',
        title: {
            zh: '基于计算机视觉与 ROS 的自主智能巡检机器人系统',
            en: 'Autonomous Intelligent Inspection Robot System Based on Computer Vision and ROS'
        },
        date: {
            zh: '2025.04 - 2025.08',
            en: '2025.04 - 2025.08'
        },
        role: {
            zh: '主要成员',
            en: 'Main Member'
        },
        category: {
            zh: 'AI项目',
            en: 'AI Project'
        },
        description: {
            zh: [
                '负责机器人系统的整体集成与调试，基于 turn_on_ahpu_robot 底层功能包，成功实现与 STM32 下位机的稳定通信',
                '可靠获取 IMU、电机编码器数据并发布为 /odom、/imu 等 ROS 话题，精准控制底盘电机运动',
                '建图与定位：部署并调试 Gmapping SLAM 算法，配置并优化 AMCL 自适应蒙特卡洛定位算法',
                '集成 ROS navigation 功能包，采用 Dijkstra 算法进行全局最优路径规划',
                '开发智能巡检与异常检测算法：使用 OpenCV 和 YOLOv5 模型训练自定义数据集，对巡检目标（压力表、温度表等）进行精准检测与定位'
            ],
            en: [
                'Responsible for overall integration and debugging of the robot system, based on turn_on_ahpu_robot underlying packages, successfully achieved stable communication with STM32 slave computer',
                'Reliably obtained IMU and motor encoder data and published as ROS topics such as /odom and /imu, precisely controlling chassis motor movement',
                'Mapping and localization: Deployed and debugged Gmapping SLAM algorithm, configured and optimized AMCL Adaptive Monte Carlo Localization algorithm',
                'Integrated ROS navigation package, using Dijkstra algorithm for global optimal path planning',
                'Developed intelligent inspection and anomaly detection algorithms: Used OpenCV and YOLOv5 models to train custom datasets for precise detection and localization of inspection targets (pressure gauges, temperature gauges, etc.)'
            ]
        },
        achievements: {
            zh: [
                '2024 年 6 月 第二十六届中国机器人及人工智能大赛（智能巡检）江苏赛区总决赛省级二等奖',
                '2024 年 8 月 第二十六届中国机器人及人工智能大赛（智能巡检）全国总决赛三等奖'
            ],
            en: [
                'June 2024 - 26th China Robot and Artificial Intelligence Competition (Intelligent Inspection) Jiangsu Provincial Finals Second Prize',
                'August 2024 - 26th China Robot and Artificial Intelligence Competition (Intelligent Inspection) National Finals Third Prize'
            ]
        }
    }
];

const defaultWorkData = [
    {
        icon: '🏭',
        title: {
            zh: '自动下料控制系统',
            en: 'Automatic Feeding Control System'
        },
        desc: {
            zh: '基于PLC+HMI+伺服的自动化设备，定位精度±0.5mm，获全国一等奖',
            en: 'PLC+HMI+Servo based automation equipment, positioning accuracy ±0.5mm, won National First Prize'
        },
        tags: ['PLC', '伺服控制', 'HMI'],
        category: {
            zh: '机器人项目',
            en: 'Robotics Project'
        },
        projectIndex: 0
    },
    {
        icon: '🤖',
        title: {
            zh: '智能巡检机器人',
            en: 'Intelligent Inspection Robot'
        },
        desc: {
            zh: '基于ROS的自主导航系统，集成YOLOv5视觉检测，获全国三等奖',
            en: 'ROS-based autonomous navigation system, integrated with YOLOv5 vision detection, won National Third Prize'
        },
        tags: ['ROS', 'SLAM', 'YOLOv5'],
        category: {
            zh: 'AI项目',
            en: 'AI Project'
        },
        projectIndex: 1
    }
];

let projectData = [];
let workData = [];
let currentEditIndex = -1;
let deleteConfirmIndex = -1;
let currentProjectFilter = 'all';
let currentWorkFilter = 'all';

function getProjectText(text, lang) {
    if (typeof text === 'object' && text !== null) {
        if (Array.isArray(text.zh) || Array.isArray(text.en)) {
            return text[lang] || text.zh || [];
        }
        return text[lang] || text.zh || '';
    }
    return text || '';
}

function loadProjects() {
    const saved = localStorage.getItem('projects');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed.length > 0 && typeof parsed[0].title === 'object') {
                projectData = parsed;
            } else {
                projectData = JSON.parse(JSON.stringify(defaultProjectData));
                saveProjects();
            }
        } catch {
            projectData = JSON.parse(JSON.stringify(defaultProjectData));
            saveProjects();
        }
    } else {
        projectData = JSON.parse(JSON.stringify(defaultProjectData));
        saveProjects();
    }
    workData = JSON.parse(JSON.stringify(defaultWorkData));
    renderProjects();
    renderWorks();
}

function saveProjects() {
    localStorage.setItem('projects', JSON.stringify(projectData));
}

function renderProjects() {
    const container = document.getElementById('projectsContainer');
    const filteredProjects = currentProjectFilter === 'all' 
        ? projectData 
        : projectData.filter(p => getProjectText(p.category, 'zh') === currentProjectFilter);
    const currentLang = localStorage.getItem('language') || 'zh';
    const achievementsTitle = currentLang === 'zh' ? '🏆 成果与荣誉' : '🏆 Achievements & Honors';
    
    container.innerHTML = filteredProjects.map((project, displayIndex) => {
        const originalIndex = projectData.indexOf(project);
        const descriptions = getProjectText(project.description, currentLang);
        const achievements = getProjectText(project.achievements, currentLang);
        let descHTML = descriptions.map(item => `<li>${item}</li>`).join('');
        let achieveHTML = achievements.map(item => `<li>${item}</li>`).join('');
        
        return `
            <div class="project-card">
                <div class="project-header">
                    <div>
                        <div class="project-title">${getProjectText(project.title, currentLang)}</div>
                        <div class="project-date">${getProjectText(project.date, currentLang)}</div>
                    </div>
                    <div class="project-role">${getProjectText(project.role, currentLang)}</div>
                </div>
                ${project.category ? `<div class="project-category">${getProjectText(project.category, currentLang)}</div>` : ''}
                <div class="project-content">
                    <ul>${descHTML}</ul>
                </div>
                <div class="achievements">
                    <div class="achievements-title">${achievementsTitle}</div>
                    <ul>${achieveHTML}</ul>
                </div>
                <div class="project-actions">
                    <button class="edit-btn" onclick="openEditModal(${originalIndex})">✏️ ${currentLang === 'zh' ? '编辑' : 'Edit'}</button>
                    <button class="delete-btn" onclick="showDeleteConfirm(${originalIndex})">🗑️ ${currentLang === 'zh' ? '删除' : 'Delete'}</button>
                </div>
            </div>
        `;
    }).join('');
}

function renderWorks() {
    const container = document.querySelector('.works-grid');
    const filteredWorks = currentWorkFilter === 'all' 
        ? workData 
        : workData.filter(w => getProjectText(w.category, 'zh') === currentWorkFilter);
    const currentLang = localStorage.getItem('language') || 'zh';
    const viewDetailText = currentLang === 'zh' ? '查看详情' : 'View Details';
    
    container.innerHTML = filteredWorks.map((work, displayIndex) => {
        const tagsHTML = work.tags.map(tag => `<span class="work-tag">${tag}</span>`).join('');
        return `
            <div class="work-card">
                <div class="work-icon">${work.icon}</div>
                <div class="work-title">${getProjectText(work.title, currentLang)}</div>
                <div class="work-desc">${getProjectText(work.desc, currentLang)}</div>
                ${work.category ? `<div class="work-category">${getProjectText(work.category, currentLang)}</div>` : ''}
                <div class="work-tags">
                    ${tagsHTML}
                </div>
                <button class="work-detail-btn" onclick="showProjectDetail(${work.projectIndex})">${viewDetailText}</button>
            </div>
        `;
    }).join('');
}

function filterProjects(category) {
    currentProjectFilter = category;
    updateFilterButtons('project');
    renderProjects();
}

function filterWorks(category) {
    currentWorkFilter = category;
    updateFilterButtons('work');
    renderWorks();
}

function updateFilterButtons(type) {
    const prefix = type === 'project' ? 'project' : 'work';
    const currentFilter = type === 'project' ? currentProjectFilter : currentWorkFilter;
    
    document.querySelectorAll(`.${prefix}-filter-btn`).forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === currentFilter) {
            btn.classList.add('active');
        }
    });
}

function showProjectDetail(index) {
    const project = projectData[index];
    const modalContent = document.getElementById('modalContent');
    const currentLang = localStorage.getItem('language') || 'zh';
    const achievementsTitle = currentLang === 'zh' ? '🏆 成果与荣誉' : '🏆 Achievements & Honors';
    
    const descriptions = getProjectText(project.description, currentLang);
    const achievements = getProjectText(project.achievements, currentLang);
    let descHTML = descriptions.map(item => `<li>${item}</li>`).join('');
    let achieveHTML = achievements.map(item => `<li>${item}</li>`).join('');
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <div class="modal-icon">${project.icon}</div>
            <div class="modal-title">
                <h2>${getProjectText(project.title, currentLang)}</h2>
                <div class="modal-meta">${getProjectText(project.date, currentLang)} | ${getProjectText(project.role, currentLang)}</div>
            </div>
        </div>
        ${project.category ? `<div class="project-category" style="margin: 16px 0;">${getProjectText(project.category, currentLang)}</div>` : ''}
        <div class="project-content">
            <ul>${descHTML}</ul>
        </div>
        <div class="achievements">
            <div class="achievements-title">${achievementsTitle}</div>
            <ul>${achieveHTML}</ul>
        </div>
    `;
    
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function showDeleteConfirm(index) {
    deleteConfirmIndex = index;
    const project = projectData[index];
    const modalContent = document.getElementById('confirmModalContent');
    const currentLang = localStorage.getItem('language') || 'zh';
    const confirmText = currentLang === 'zh' ? '确认删除' : 'Confirm Delete';
    const warningText = currentLang === 'zh' 
        ? '确定要删除项目「' + getProjectText(project.title, currentLang) + '」吗？<br>此操作无法撤销！'
        : 'Are you sure you want to delete project "' + getProjectText(project.title, currentLang) + '"?<br>This action cannot be undone!';
    const cancelText = currentLang === 'zh' ? '取消' : 'Cancel';
    const confirmDeleteText = currentLang === 'zh' ? '确认删除' : 'Confirm Delete';
    
    modalContent.innerHTML = `
        <h2>⚠️ ${confirmText}</h2>
        <p>${warningText}</p>
        <div class="confirm-actions">
            <button class="cancel-btn" onclick="closeConfirmModal()">${cancelText}</button>
            <button class="confirm-delete-btn" onclick="confirmDeleteProject()">${confirmDeleteText}</button>
        </div>
    `;
    
    document.getElementById('confirmModalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeConfirmModal() {
    document.getElementById('confirmModalOverlay').classList.remove('active');
    document.body.style.overflow = '';
    deleteConfirmIndex = -1;
}

function confirmDeleteProject() {
    if (deleteConfirmIndex !== -1) {
        projectData.splice(deleteConfirmIndex, 1);
        saveProjects();
        renderProjects();
        closeConfirmModal();
    }
}

function openAddProjectModal() {
    currentEditIndex = -1;
    showEditModal({
        icon: '📋',
        title: '',
        date: '',
        role: '',
        category: '',
        description: [''],
        achievements: ['']
    });
}

function openEditModal(index) {
    currentEditIndex = index;
    showEditModal(projectData[index]);
}

function showEditModal(project) {
    const modalContent = document.getElementById('editModalContent');
    const currentLang = localStorage.getItem('language') || 'zh';
    const titleText = currentEditIndex === -1 
        ? (currentLang === 'zh' ? '添加新项目' : 'Add New Project')
        : (currentLang === 'zh' ? '编辑项目' : 'Edit Project');
    const iconLabel = currentLang === 'zh' ? '图标' : 'Icon';
    const projectNameLabel = currentLang === 'zh' ? '项目名称' : 'Project Name';
    const categoryLabel = currentLang === 'zh' ? '分类' : 'Category';
    const selectCategory = currentLang === 'zh' ? '请选择分类' : 'Select Category';
    const timeLabel = currentLang === 'zh' ? '时间' : 'Time';
    const roleLabel = currentLang === 'zh' ? '角色' : 'Role';
    const descLabel = currentLang === 'zh' ? '项目描述（每行一条）' : 'Project Description (one per line)';
    const achievementsLabel = currentLang === 'zh' ? '成果与荣誉（每行一条）' : 'Achievements & Honors (one per line)';
    const cancelText = currentLang === 'zh' ? '取消' : 'Cancel';
    const saveText = currentLang === 'zh' ? '保存' : 'Save';
    
    const descriptions = getProjectText(project.description, currentLang);
    const titleTextVal = getProjectText(project.title, currentLang);
    const dateTextVal = getProjectText(project.date, currentLang);
    const roleTextVal = getProjectText(project.role, currentLang);
    const categoryTextVal = getProjectText(project.category, currentLang);
    
    modalContent.innerHTML = `
        <h2 style="color: #1565c0; margin-bottom: 25px; text-align: center;">
            ${titleText}
        </h2>
        <div class="edit-form-group">
            <label class="edit-form-label">${iconLabel} <span style="color: #c62828;">*</span></label>
            <input type="text" class="edit-form-input" id="editIcon" value="${project.icon}" placeholder="${currentLang === 'zh' ? '输入emoji图标，如🏭' : 'Enter emoji icon, e.g., 🏭'}">
            <div class="form-error" id="errorIcon">${currentLang === 'zh' ? '请输入图标' : 'Please enter an icon'}</div>
        </div>
        <div class="edit-form-group">
            <label class="edit-form-label">${projectNameLabel} <span style="color: #c62828;">*</span></label>
            <input type="text" class="edit-form-input" id="editTitle" value="${titleTextVal}" placeholder="${currentLang === 'zh' ? '请输入项目名称' : 'Please enter project name'}">
            <div class="form-error" id="errorTitle">${currentLang === 'zh' ? '请输入项目名称' : 'Please enter project name'}</div>
        </div>
        <div class="edit-form-group">
            <label class="edit-form-label">${categoryLabel}</label>
            <select class="edit-form-input" id="editCategory">
                <option value="">${selectCategory}</option>
                <option value="机器人项目" ${categoryTextVal === '机器人项目' ? 'selected' : ''}>${currentLang === 'zh' ? '机器人项目' : 'Robotics Project'}</option>
                <option value="AI项目" ${categoryTextVal === 'AI项目' ? 'selected' : ''}>${currentLang === 'zh' ? 'AI项目' : 'AI Project'}</option>
                <option value="前端项目" ${categoryTextVal === '前端项目' ? 'selected' : ''}>${currentLang === 'zh' ? '前端项目' : 'Frontend Project'}</option>
                <option value="后端项目" ${categoryTextVal === '后端项目' ? 'selected' : ''}>${currentLang === 'zh' ? '后端项目' : 'Backend Project'}</option>
                <option value="个人作品" ${categoryTextVal === '个人作品' ? 'selected' : ''}>${currentLang === 'zh' ? '个人作品' : 'Personal Work'}</option>
            </select>
        </div>
        <div class="edit-form-group">
            <label class="edit-form-label">${timeLabel}</label>
            <input type="text" class="edit-form-input" id="editDate" value="${dateTextVal}" placeholder="${currentLang === 'zh' ? '如：2025.05 - 至今' : 'e.g., 2025.05 - Present'}">
        </div>
        <div class="edit-form-group">
            <label class="edit-form-label">${roleLabel}</label>
            <input type="text" class="edit-form-input" id="editRole" value="${roleTextVal}" placeholder="${currentLang === 'zh' ? '如：第一主持人' : 'e.g., First Host'}">
        </div>
        <div class="edit-form-group">
            <label class="edit-form-label">${descLabel}</label>
            <textarea class="edit-form-textarea" id="editDescription" placeholder="${currentLang === 'zh' ? '每条描述占一行' : 'Each description on a new line'}">${descriptions.join('\n')}</textarea>
        </div>
        <div class="edit-form-group">
            <label class="edit-form-label">${achievementsLabel}</label>
            <textarea class="edit-form-textarea" id="editAchievements" placeholder="${currentLang === 'zh' ? '每条成果占一行' : 'Each achievement on a new line'}">${getProjectText(project.achievements, currentLang).join('\n')}</textarea>
        </div>
        <div class="edit-form-actions">
            <button class="cancel-btn" onclick="closeEditModal()">${cancelText}</button>
            <button onclick="saveProject()">${saveText}</button>
        </div>
    `;
    
    document.getElementById('editModalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeEditModal() {
    document.getElementById('editModalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function validateForm() {
    let isValid = true;
    const currentLang = localStorage.getItem('language') || 'zh';
    
    const iconInput = document.getElementById('editIcon');
    const titleInput = document.getElementById('editTitle');
    const errorIcon = document.getElementById('errorIcon');
    const errorTitle = document.getElementById('errorTitle');
    
    iconInput.classList.remove('error');
    titleInput.classList.remove('error');
    errorIcon.classList.remove('show');
    errorTitle.classList.remove('show');
    
    if (!iconInput.value.trim()) {
        iconInput.classList.add('error');
        errorIcon.classList.add('show');
        isValid = false;
    }
    
    if (!titleInput.value.trim()) {
        titleInput.classList.add('error');
        errorTitle.classList.add('show');
        isValid = false;
    }
    
    return isValid;
}

function saveProject() {
    if (!validateForm()) {
        return;
    }
    
    const icon = document.getElementById('editIcon').value.trim();
    const title = document.getElementById('editTitle').value.trim();
    const date = document.getElementById('editDate').value.trim();
    const role = document.getElementById('editRole').value.trim();
    const category = document.getElementById('editCategory').value.trim();
    const description = document.getElementById('editDescription').value.split('\n').filter(item => item.trim() !== '');
    const achievements = document.getElementById('editAchievements').value.split('\n').filter(item => item.trim() !== '');
    const currentLang = localStorage.getItem('language') || 'zh';
    
    const newProject = { 
        icon, 
        title: { [currentLang]: title },
        date: { [currentLang]: date },
        role: { [currentLang]: role },
        category: { [currentLang]: category },
        description: { [currentLang]: description },
        achievements: { [currentLang]: achievements }
    };
    
    if (currentEditIndex === -1) {
        projectData.push(newProject);
    } else {
        projectData[currentEditIndex] = newProject;
    }
    
    saveProjects();
    renderProjects();
    closeEditModal();
}

function updateProjectsLanguage() {
    renderProjects();
    renderWorks();
}

function exportProjects() {
    const dataStr = JSON.stringify(projectData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'projects_data_' + new Date().toISOString().split('T')[0] + '.json';
    link.click();
    URL.revokeObjectURL(url);
}

function importProjects(event) {
    const file = event.files[0];
    const currentLang = localStorage.getItem('language') || 'zh';
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            
            if (Array.isArray(importedData)) {
                projectData = importedData;
                saveProjects();
                renderProjects();
                alert(currentLang === 'zh' 
                    ? '导入成功！共导入 ' + importedData.length + ' 个项目'
                    : 'Import successful! Imported ' + importedData.length + ' projects');
            } else {
                alert(currentLang === 'zh' 
                    ? '无效的文件格式，请确保是项目数据JSON文件'
                    : 'Invalid file format, please ensure it is a project data JSON file');
            }
        } catch (error) {
            alert(currentLang === 'zh' 
                ? '导入失败：' + error.message
                : 'Import failed: ' + error.message);
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

document.addEventListener('DOMContentLoaded', loadProjects);
