function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('section, .project-card, .work-card, .certificate-card, .info-card');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animatedElements.forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    } else {
        animatedElements.forEach(el => {
            el.classList.add('animate-in');
        });
    }
}

function setupPageLoadAnimation() {
    document.body.classList.add('page-loading');
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            document.body.classList.remove('page-loading');
            document.body.classList.add('page-loaded');
        }, 100);
    });
}

function setupHoverAnimations() {
    const buttons = document.querySelectorAll('button, .navbar-link');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setupPageLoadAnimation();
    setupScrollAnimations();
    setupHoverAnimations();
});
