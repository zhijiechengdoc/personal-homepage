function generateSidebarLinks() {
    const sections = document.querySelectorAll('section[id]');
    const sidebarLinks = document.getElementById('sidebarLinks');
    
    if (!sidebarLinks) return;
    
    sidebarLinks.innerHTML = '';
    
    sections.forEach(section => {
        const id = section.id;
        const title = section.querySelector('h2');
        
        if (title) {
            const link = document.createElement('a');
            link.href = '#' + id;
            link.className = 'sidebar-link';
            link.textContent = title.textContent.replace(/[^\u4e00-\u9fa5a-zA-Z\s]/g, '').trim();
            link.addEventListener('click', function(e) {
                e.preventDefault();
                document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
            });
            
            sidebarLinks.appendChild(link);
        }
    });
}

function updateActiveSidebarLink() {
    const sections = document.querySelectorAll('section[id]');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    sidebarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebarNav');
    sidebar.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
    generateSidebarLinks();
    
    window.addEventListener('scroll', updateActiveSidebarLink);
});
