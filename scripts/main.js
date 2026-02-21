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

                // Use innerHTML strictly for elements we know contain safe tags or lists
                if (key === 'heroTitle') {
                    el.innerHTML = locales[lang][key];
                } else if (Array.isArray(locales[lang][key])) {
                    el.innerHTML = locales[lang][key].map(item => `<li>${item}</li>`).join('');
                } else {
                    el.textContent = locales[lang][key];
                }
            }
        });

        // Update document lang attribute
        document.documentElement.lang = lang;

        // Re-render projects if on a category page
        renderProjects(lang);
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

    // Category Hover Effect (Home Page)
    const categoryCapsules = document.querySelectorAll('.category-capsule');
    const categoryBg = document.getElementById('category-bg');

    categoryCapsules.forEach(capsule => {
        capsule.addEventListener('mouseenter', () => {
            const imgSrc = capsule.getAttribute('data-image');
            if (imgSrc && categoryBg) {
                categoryBg.style.backgroundImage = `url(${imgSrc})`;
                categoryBg.classList.add('active');
            }
        });

        capsule.addEventListener('mouseleave', () => {
            if (categoryBg) {
                categoryBg.classList.remove('active');
            }
        });
    });

    // Dynamic Category Page Rendering
    function renderProjects(lang) {
        const projectsListContainer = document.getElementById('dynamic-projects-list');
        if (!projectsListContainer) return;

        // Determine which category we are in based on filename
        const fileName = window.location.pathname.split('/').pop() || 'index.html';
        const categoryKey = fileName.replace('.html', '') + 'Projects'; // e.g. riggingProjects

        if (!locales[lang][categoryKey]) return;

        projectsListContainer.innerHTML = locales[lang][categoryKey].map(project => `
            <div class="project-block" style="margin-bottom: 6rem; border-top: 1px solid var(--border-color); padding-top: 4rem;">
                <div class="work-media-wrapper" style="border-radius: 8px; box-shadow: 0 12px 24px rgba(0,0,0,0.5); margin-bottom: 2.5rem; overflow: hidden; aspect-ratio: 16/9;">
                    <img src="${project.image}" alt="${project.title}" style="width:100%; height:100%; object-fit: cover; display:block;">
                </div>
                <h2 style="color: var(--accent); margin-bottom: 1rem; font-size: 2rem;">${project.title}</h2>
                <p style="font-size: 1.15rem; color: var(--text-primary); margin-bottom: 2rem; line-height: 1.8;">${project.desc}</p>
            </div>
        `).join('');
    }

    // Initial render call is already handled by setLanguage(currentLang) at line 55
})
