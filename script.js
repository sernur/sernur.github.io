// Language and Theme Management
class WebsiteController {
    constructor() {
        this.currentLanguage = 'en';
        this.currentTheme = 'dark';
        this.translations = {};
        this.init();
    }

    async init() {
        await this.loadTranslations();
        this.setupEventListeners();
        this.loadSavedSettings();
        this.updateContent();
        this.updateTheme();
    }

    async loadTranslations() {
        try {
            // Load all language files
            const languages = ['en', 'ru', 'kk'];
            for (const lang of languages) {
                const response = await fetch(`./languages/${lang}.js`);
                const text = await response.text();
                // Extract translations from the file
                const match = text.match(/const translations = ({[\s\S]*?});/);
                if (match) {
                    const translationsObj = eval('(' + match[1] + ')');
                    this.translations[lang] = translationsObj[lang];
                }
            }
        } catch (error) {
            console.error('Error loading translations:', error);
            // Fallback to English if loading fails
            this.currentLanguage = 'en';
        }
    }

    setupEventListeners() {
        // Language dropdown toggle
        const langToggle = document.getElementById('langToggle');
        const langMenu = document.getElementById('langMenu');

        if (langToggle && langMenu) {
            langToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                langMenu.classList.toggle('show');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                langMenu.classList.remove('show');
            });

            // Language options
            document.querySelectorAll('.lang-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    const lang = e.target.dataset.lang;
                    this.changeLanguage(lang);

                    // Update active option
                    document.querySelectorAll('.lang-option').forEach(opt => opt.classList.remove('active'));
                    e.target.classList.add('active');

                    // Update current language display
                    const currentLang = document.querySelector('.current-lang');
                    if (currentLang) {
                        currentLang.textContent = lang.toUpperCase();
                    }

                    // Close dropdown
                    langMenu.classList.remove('show');
                });
            });
        }

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    changeLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            this.updateContent();
            this.saveSettings();
            this.updateActiveLanguageButton();
        }
    }

    updateContent() {
        const translations = this.translations[this.currentLanguage];
        if (!translations) return;

        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });

        // Update HTML content for elements with data-translate-html
        document.querySelectorAll('[data-translate-html]').forEach(element => {
            const key = element.dataset.translateHtml;
            if (translations[key]) {
                element.innerHTML = translations[key];
            }
        });
    }

    updateActiveLanguageButton() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === this.currentLanguage) {
                btn.classList.add('active');
            }
        });
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.updateTheme();
        this.saveSettings();
    }

    updateTheme() {
        const body = document.body;
        const themeIcon = document.querySelector('#theme-toggle i');

        if (this.currentTheme === 'light') {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
            if (themeIcon) {
                themeIcon.className = 'fas fa-moon';
            }
        } else {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            if (themeIcon) {
                themeIcon.className = 'fas fa-sun';
            }
        }
    }

    saveSettings() {
        localStorage.setItem('website-language', this.currentLanguage);
        localStorage.setItem('website-theme', this.currentTheme);
    }

    loadSavedSettings() {
        const savedLang = localStorage.getItem('website-language');
        const savedTheme = localStorage.getItem('website-theme');

        if (savedLang && this.translations[savedLang]) {
            this.currentLanguage = savedLang;
        }

        if (savedTheme) {
            this.currentTheme = savedTheme;
        }

        this.updateActiveLanguageButton();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WebsiteController();
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

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