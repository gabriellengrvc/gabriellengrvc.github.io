const translations = {
    eng: {
        bio: "I am gabrielle (gabby/gabriella) a student in geneva, switzerland, interested in coding, environmental applications, and piano.",
        awards: "some recent awards",
        repertoire: "some recent repertoire",
        projects: "some cool projects",
        notes: "notes",
        notesTitle: "notes from some courses I've taken",
        copyright: "Built with love ⋆˙⟡♡"
        summerSchools: "summer schools"
    },
    fr: {
        bio: "Je m'appelle gabrielle (gabby/gabriella) une étudiante à genève, suisse, intéressée par l'informatique, projets liés à l'environnement, et le piano.",
        awards: "quelques prix récentes",
        repertoire: "quelques morceaux récents",
        projects: "quelques projets cool",
        notes: "notes du collège",
        notesTitle: "notes de quelques cours que j'ai suivis",
        copyright: "Construite avec amour ⋆˙⟡♡"
        summerSchools: "écoles d'été"
    }
};

let preferences = {
    language: 'eng',
    darkMode: false
};

document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeIntersectionObserver();
    loadSavedPreferences();
});

function loadSavedPreferences() {
    if (preferences.language !== 'eng') {
        document.documentElement.setAttribute('lang', preferences.language);
        applyLanguage(preferences.language);
    }
    if (preferences.darkMode) {
        document.body.classList.add('dark-mode');
        updateDarkModeUI(true);
    }
}

function applyLanguage(currentLang) {
    const notesTitle = document.querySelector('.section3-text h2');
    if (notesTitle) {
        notesTitle.textContent = translations[currentLang].notesTitle;
    }
    const bioElement = document.querySelector('#bio p:first-child');
    if (bioElement) {
        bioElement.textContent = translations[currentLang].bio;
        
        const awardsHeader = document.querySelector('#awards h2');
        const repertoireHeaders = document.querySelectorAll('#repertoire h2');
        const projectsHeader = document.querySelector('#projects h2');
        
        if (awardsHeader) awardsHeader.textContent = translations[currentLang].awards;
        if (repertoireHeaders[0]) repertoireHeaders[0].textContent = translations[currentLang].repertoire;
        if (repertoireHeaders[1]) repertoireHeaders[1].textContent = translations[currentLang].summerSchools;
        if (projectsHeader) projectsHeader.textContent = translations[currentLang].projects;
    }
    const notesLink = document.querySelector('.nav-links a[href="./notes.html"]');
    if (notesLink) {
        notesLink.textContent = translations[currentLang].notes;
    }
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.textContent = `© 2025 gabriellengrvc. ${translations[currentLang].copyright}`;
    }
    const langBtn = document.querySelector('.lang-btn');
    if (langBtn) {
        langBtn.textContent = currentLang === 'fr' ? 'ENG' : 'FR';
    }
}

function updateDarkModeUI(isDarkMode) {
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const darkModeBtn = document.querySelector('.dark-mode-btn');
    
    if (isDarkMode) {
        if (sunIcon) sunIcon.style.display = 'none';
        if (moonIcon) moonIcon.style.display = 'inline-block';
        if (darkModeBtn) darkModeBtn.style.color = '#fff';
    } else {
        if (sunIcon) sunIcon.style.display = 'inline-block';
        if (moonIcon) moonIcon.style.display = 'none';
        if (darkModeBtn) darkModeBtn.style.color = '#000';
    }
}
    const elementsToAnimate = document.querySelectorAll('section, h2, p, ul, li');
    elementsToAnimate.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
}

function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const sectionsToObserve = document.querySelectorAll('#bio, #awards, #repertoire, #projects');
    sectionsToObserve.forEach(section => {
        observer.observe(section);
    });
}

function toggleLanguage() {
    const currentLang = document.documentElement.getAttribute('lang') === 'fr' ? 'eng' : 'fr';
    document.documentElement.setAttribute('lang', currentLang);
    
    preferences.language = currentLang;
    
    const elementsToTranslate = document.querySelectorAll('#bio p:first-child, #awards h2, #repertoire h2, #projects h2, .nav-links a[href="./notes.html"], footer p');
    
    elementsToTranslate.forEach(element => {
        if (element) {
            element.style.opacity = '0.5';
            element.style.transform = 'translateY(-5px)';
            element.style.transition = 'all 0.3s ease';
        }
    });
    
    setTimeout(() => {
        applyLanguage(currentLang);
        
        // Restore elements with animation
        elementsToTranslate.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }, 200);
}

function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = !body.classList.contains('dark-mode');
    
    body.style.transition = 'all 0.5s ease';
    
    body.classList.toggle('dark-mode');
    
    preferences.darkMode = isDarkMode;
    
    updateDarkModeUI(isDarkMode);
    
    const darkModeBtn = document.querySelector('.dark-mode-btn');
    if (darkModeBtn) {
        if (isDarkMode) {
            const moonIcon = document.getElementById('moon-icon');
            if (moonIcon) {
                moonIcon.style.transform = 'rotate(0deg)';
                moonIcon.style.animation = 'none';
                setTimeout(() => {
                    moonIcon.style.animation = 'fadeIn 0.3s ease';
                }, 10);
            }
        } else {
            const sunIcon = document.getElementById('sun-icon');
            if (sunIcon) {
                sunIcon.style.transform = 'rotate(0deg)';
                sunIcon.style.animation = 'none';
                setTimeout(() => {
                    sunIcon.style.animation = 'fadeIn 0.3s ease';
                }, 10);
            }
        }
        
        darkModeBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            darkModeBtn.style.transform = 'scale(1)';
        }, 150);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        const rate = scrolled * -0.5;
        section.style.transform = `translateY(${rate * 0.1}px)`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('#projects a');
    
    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});

function handleMobileMenu() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768) {
        // Mobile specific interactions can be added here
        nav.addEventListener('click', function(e) {
            if (e.target.closest('.nav-links')) {
                // Handle mobile menu interactions
            }
        });
    }
}

window.addEventListener('resize', handleMobileMenu);
document.addEventListener('DOMContentLoaded', handleMobileMenu);
