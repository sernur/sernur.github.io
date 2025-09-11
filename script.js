// Theme Management
class WebsiteController {
    constructor() {
        this.currentTheme = 'dark';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadSavedSettings();
        this.updateTheme();
    }

    setupEventListeners() {
        // Theme toggle button
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.updateTheme();
        this.saveSettings();
    }

    updateTheme() {
        const body = document.body;
        const themeToggle = document.getElementById('themeToggle');
        
        if (this.currentTheme === 'light') {
            body.classList.add('light-theme');
            if (themeToggle) {
                themeToggle.innerHTML = '☀';
            }
        } else {
            body.classList.remove('light-theme');
            if (themeToggle) {
                themeToggle.innerHTML = '☾';
            }
        }
    }

    saveSettings() {
        localStorage.setItem('theme_v2', this.currentTheme);
    }

    loadSavedSettings() {
        const savedTheme = localStorage.getItem('theme_v2');
        if (savedTheme) {
            this.currentTheme = savedTheme;
        } else {
            // Default to dark on first load (e.g., GitHub Pages fresh visit)
            this.currentTheme = 'dark';
            localStorage.setItem('theme_v2', 'dark');
        }
    }
}
// Language-related code removed - website now uses English only

// Initialize website controller
document.addEventListener('DOMContentLoaded', () => {
    // Ensure dark is the initial class if no explicit 'theme_v2' = 'light'
    try {
        var saved = localStorage.getItem('theme_v2');
        if (saved !== 'light') {
            document.body.classList.remove('light-theme');
        }
    } catch (e) {}

    new WebsiteController();
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

if (window.scrollY > 50) {
        nav.style.background = 'rgba(26, 26, 46, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.background = 'rgba(26, 26, 46, 0.9)';
        nav.style.backdropFilter = 'blur(5px)';
    }
});

// Language-related functions removed - website now uses English only

// Unified nav scroll effect (merged duplicates)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (!nav) return;
    const y = window.scrollY;
    if (y > 100) {
        nav.style.background = 'rgba(75, 85, 135, 0.95)';
        nav.style.backdropFilter = 'blur(20px)';
    } else if (y > 50) {
        nav.style.background = 'rgba(26, 26, 46, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        // fall back to CSS default variables for top-of-page look
        nav.style.background = 'var(--sidebar-bg)';
        nav.style.backdropFilter = 'blur(25px) saturate(180%)';
    }
});
