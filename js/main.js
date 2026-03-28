function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('.lazy-image');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.onload = function() {
                            img.classList.add('loaded');
                        };
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '100px 0px',
            threshold: 0.01
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.onload = function() {
                    img.classList.add('loaded');
                };
            }
        });
    }
}

const backToTopBtn = document.getElementById('backToTop');
const scrollProgressBar = document.getElementById('scrollProgressBar');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
    
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollProgressBar.style.width = scrolled + '%';
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

let selectedFormat = 'pdf';

function showResumeModal() {
    const overlay = document.getElementById('resumeModalOverlay');
    overlay.classList.add('active');
    updateDownloadCount();
}

function closeResumeModal() {
    const overlay = document.getElementById('resumeModalOverlay');
    overlay.classList.remove('active');
}

function selectFormat(format) {
    selectedFormat = format;
    
    document.querySelectorAll('.format-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    const selectedOption = event.target.closest('.format-option');
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
    
    document.getElementById('pdfCheck').textContent = format === 'pdf' ? '✓' : '';
    document.getElementById('wordCheck').textContent = format === 'word' ? '✓' : '';
    document.getElementById('markdownCheck').textContent = format === 'markdown' ? '✓' : '';
}

function getDownloadCount() {
    const count = localStorage.getItem('resumeDownloadCount');
    return count ? parseInt(count, 10) : 0;
}

function updateDownloadCount() {
    const count = getDownloadCount();
    document.getElementById('downloadCount').textContent = count;
}

function incrementDownloadCount() {
    const count = getDownloadCount() + 1;
    localStorage.setItem('resumeDownloadCount', count);
    return count;
}

function downloadResume() {
    let fileName = '承志杰_简历';
    let fileExtension = '';
    let mimeType = '';
    
    switch (selectedFormat) {
        case 'pdf':
            fileExtension = '.pdf';
            mimeType = 'application/pdf';
            break;
        case 'word':
            fileExtension = '.docx';
            mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            break;
        case 'markdown':
            fileExtension = '.md';
            mimeType = 'text/markdown';
            break;
    }
    
    const fullFileName = fileName + fileExtension;
    
    if (selectedFormat === 'pdf') {
        const link = document.createElement('a');
        link.href = 'resume.pdf';
        link.download = fullFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        const sampleContent = generateSampleResume(selectedFormat);
        downloadFile(sampleContent, fullFileName, mimeType);
    }
    
    const newCount = incrementDownloadCount();
    document.getElementById('downloadCount').textContent = newCount;
    closeResumeModal();
}

function generateSampleResume(format) {
    const name = '承志杰';
    const title = '机器人工程专业学生';
    
    if (format === 'markdown') {
        return `# ${name}

## 个人简介
${title}，专注于机器人与自动化、AI与计算机视觉领域。

## 技能专长
### 机器人与自动化
- PLC编程 - 85%
- 伺服控制 - 80%
- HMI设计 - 75%
- 电气原理图 - 70%

### AI与计算机视觉
- ROS机器人操作系统 - 75%
- SLAM建图 - 70%
- YOLOv5目标检测 - 75%
- OpenCV图像处理 - 70%

### 软件开发
- Python - 80%
- JavaScript - 65%
- HTML/CSS - 70%
- Git版本控制 - 65%

## 联系方式
- 个人主页: [个人主页链接]
`;
    } else {
        return `${name} - 简历\n\n个人简介:\n${title}，专注于机器人与自动化、AI与计算机视觉领域。\n\n注：这是一个示例文件，请使用PDF格式获取完整简历。`;
    }
}

function downloadFile(content, fileName, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}

function previewResume() {
    closeResumeModal();
    const overlay = document.getElementById('pdfPreviewModalOverlay');
    const iframe = document.getElementById('pdfPreviewFrame');
    iframe.src = 'resume.pdf';
    overlay.classList.add('active');
}

function closePdfPreviewModal() {
    const overlay = document.getElementById('pdfPreviewModalOverlay');
    const iframe = document.getElementById('pdfPreviewFrame');
    iframe.src = '';
    overlay.classList.remove('active');
}

function closeConfirmModal() {
    const overlay = document.getElementById('confirmModalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (themeToggle) {
            themeToggle.textContent = '☀️';
        }
    }
}



document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

document.getElementById('editModalOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeEditModal();
    }
});

document.getElementById('confirmModalOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeConfirmModal();
    }
});

document.getElementById('resumeModalOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeResumeModal();
    }
});

document.getElementById('pdfPreviewModalOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closePdfPreviewModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        closeEditModal();
        closeConfirmModal();
        closeResumeModal();
        closePdfPreviewModal();
    }
});

loadProjects();
lazyLoadImages();
