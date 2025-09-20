const translations = {
        eng: {
            bio: "I am gabrielle a student in geneva, switzerland, interested in coding, science, sustainability, and piano.",
            awards: "some recent awards",
            repertoire: "some recent repertoire",
            projects: "some cool projects",
            copyright: "Built with love ⋆˙⟡♡",
            summerSchools: "summer schools"
        },
        fr: {
            bio: "Je m'appelle gabrielle une étudiante à genève, suisse, intéressée par l'informatique, les sciences, la durabilité, et le piano.",
            awards: "quelques prix récentes",
            repertoire: "quelques morceaux récents",
            projects: "quelques projets cool",
            copyright: "Construite avec amour ⋆˙⟡♡",
            summerSchools: "écoles d'été"
        }
    };

let currentLanguage = 'eng';
let isDarkMode = false;

function toggleLanguage() {
    currentLanguage = currentLanguage === 'eng' ? 'fr' : 'eng';
    
    const bioText = document.getElementById('bio-text');
    const awardsTitle = document.getElementById('awards-title');
    const repertoireTitle = document.getElementById('repertoire-title');
    const projectsTitle = document.getElementById('projects-title');
    const footerText = document.getElementById('footer-text');
    const summerSchoolsTitle = document.getElementById('summer-schools-title');
    const langBtn = document.getElementById('lang-btn');
    
    if (bioText) bioText.textContent = translations[currentLanguage].bio;
    if (awardsTitle) awardsTitle.textContent = translations[currentLanguage].awards;
    if (repertoireTitle) repertoireTitle.textContent = translations[currentLanguage].repertoire;
    if (projectsTitle) projectsTitle.textContent = translations[currentLanguage].projects;
    if (footerText) footerText.textContent = `© 2025 gabriellengrvc. ${translations[currentLanguage].copyright}`;
    if (summerSchoolsTitle) summerSchoolsTitle.textContent = translations[currentLanguage].summerSchools;
    if (langBtn) langBtn.textContent = currentLanguage === 'fr' ? 'ENG' : 'FR';
    
    document.documentElement.setAttribute('lang', currentLanguage);
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const body = document.body;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    if (isDarkMode) {
        body.classList.add('dark-mode');
        if (sunIcon) sunIcon.style.display = 'none';
        if (moonIcon) moonIcon.style.display = 'inline-block';
    } else {
        body.classList.remove('dark-mode');
        if (moonIcon) moonIcon.style.display = 'none';
        if (sunIcon) sunIcon.style.display = 'inline-block';
    }
}

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

