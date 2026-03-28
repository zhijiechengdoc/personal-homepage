const themes = {
    light: {
        name: '浅色',
        icon: '☀️',
        class: ''
    },
    dark: {
        name: '深色',
        icon: '🌙',
        class: 'dark-mode'
    },
    ocean: {
        name: '海洋',
        icon: '🌊',
        class: 'ocean-mode'
    },
    forest: {
        name: '森林',
        icon: '🌲',
        class: 'forest-mode'
    },
    sunset: {
        name: '日落',
        icon: '🌅',
        class: 'sunset-mode'
    },
    lavender: {
        name: '薰衣草',
        icon: '💜',
        class: 'lavender-mode'
    },
    cyberpunk: {
        name: '赛博朋克',
        icon: '⚡',
        class: 'cyberpunk-mode'
    }
};

let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(themeName) {
    currentTheme = themeName;
    
    Object.values(themes).forEach(theme => {
        if (theme.class) {
            document.body.classList.remove(theme.class);
        }
    });
    
    const theme = themes[themeName];
    if (theme && theme.class) {
        document.body.classList.add(theme.class);
    }
    
    localStorage.setItem('theme', themeName);
    updateThemeButtons();
}

function updateThemeButtons() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = themes[currentTheme].icon;
    }
    
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.theme === currentTheme) {
            btn.classList.add('active');
        }
    });
}

function toggleThemeMenu() {
    const menu = document.getElementById('themeMenu');
    menu.classList.toggle('open');
}

function loadTheme() {
    applyTheme(currentTheme);
}

document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
});
