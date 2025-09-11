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
        localStorage.setItem('theme', this.currentTheme);
    }

    loadSavedSettings() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.currentTheme = savedTheme;
        }
    }
}
// Language-related code removed - website now uses English only

// Initialize website controller
document.addEventListener('DOMContentLoaded', () => {
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

// Navigation bar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(26, 26, 46, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.background = 'rgba(26, 26, 46, 0.9)';
        nav.style.backdropFilter = 'blur(5px)';
    }
});

// Language-related functions removed - website now uses English only

// Add scroll effect for navigation
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(75, 85, 135, 0.95)';
        nav.style.backdropFilter = 'blur(20px)';
    } else {
        nav.style.background = 'rgba(75, 85, 135, 0.9)';
        nav.style.backdropFilter = 'blur(15px)';
    }
});