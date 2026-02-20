document.addEventListener('DOMContentLoaded', () => {
    // Localization System
    const langBtns = document.querySelectorAll('.lang-btn');
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');

    // Initialize with Thai as requested
    let currentLang = 'th';

    function setLanguage(lang) {
        if (!locales[lang]) return;
        currentLang = lang;

        // Update active class on buttons
        langBtns.forEach(btn => {
            if (btn.id === `lang-${lang}`) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update text content
        elementsToTranslate.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (locales[lang][key]) {
                // Update href if it's a resume link
                if (key === 'downloadResume' && el.tagName === 'A') {
                    el.setAttribute('href', locales[lang].resumeUrl);
                }

                // Use innerHTML strictly for elements we know contain safe tags like <span class="highlight">
                if (key === 'heroTitle') {
                    el.innerHTML = locales[lang][key];
                } else {
                    el.textContent = locales[lang][key];
                }
            }
        });

        // Update document lang attribute
        document.documentElement.lang = lang;
    }

    // Attach event listeners to switcher buttons
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.id.split('-')[1]; // e.g., 'en' or 'th'
            setLanguage(lang);
        });
    });

    // Initial load
    setLanguage(currentLang);


    // Smooth scrolling for anchor links to handle fixed header offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 70; // Height of our fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Theme Toggle Logic
    const themeBtn = document.getElementById('theme-btn');
    const iconSun = document.getElementById('theme-icon-sun');
    const iconMoon = document.getElementById('theme-icon-moon');

    // Check local storage for theme preference, default to dark
    let currentTheme = localStorage.getItem('theme') || 'dark';

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'light') {
            iconSun.style.display = 'none';
            iconMoon.style.display = 'block';
        } else {
            iconSun.style.display = 'block';
            iconMoon.style.display = 'none';
        }

        // Notify canvas to update its particle colors
        if (window.updateCanvasColors) {
            window.updateCanvasColors(theme);
        }
    }

    applyTheme(currentTheme);

    themeBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
        applyTheme(currentTheme);
    });

    // Scroll Effect for Header
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
