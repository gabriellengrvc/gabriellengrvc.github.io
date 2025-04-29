const translations = {
    eng: {
        bio: "I am gabrielle (gabby/gabriella), STEM student, filipino-vietnamese in geneva, switzerland, interested in energy efficiency, engineering, coding, piano, and reading.",
        awards: "some recent awards",
        repertoire: "some recent repertoire",
        projects: "some cool projects",
        notes: "notes",
        notesTitle: "Notes from some courses I've taken",
        copyright: "Built with love ⋆˙⟡♡"
    },
    fr: {
        bio: "Je m'appelle gabrielle (gabby/gabriella), étudiante en STEM, philippino-vietnamienne à genève, suisse, intéressée par l'efficacité énergétique, l'ingénierie, l'informatique, le piano et la lecture.",
        awards: "quelques awards récentes",
        repertoire: "quelques répertoires récents",
        projects: "quelques projets cool",
        notes: "notes du collège",
        notesTitle: "Notes de quelques cours que j'ai suivis",
        copyright: "Construite avec amour ⋆˙⟡♡"
    }
};

function toggleLanguage() {
    const currentLang = document.documentElement.getAttribute('lang') === 'fr' ? 'eng' : 'fr';
    document.documentElement.setAttribute('lang', currentLang);

    // Handle notes page
    const notesTitle = document.querySelector('.section3-text h2');
    if (notesTitle) {
        notesTitle.textContent = translations[currentLang].notesTitle;
    }

    // Handle main page
    const bioElement = document.querySelector('#bio p:first-child');
    if (bioElement) {
        bioElement.textContent = translations[currentLang].bio;
        document.querySelector('#awards h2').textContent = translations[currentLang].awards;
        document.querySelector('#repertoire h2').textContent = translations[currentLang].repertoire;
        document.querySelector('#projects h2').textContent = translations[currentLang].projects;
    }

    // Update nav link text in both pages
    document.querySelector('.nav-links a[href="./notes.html"]').textContent = translations[currentLang].notes;

    // Update footer if it exists
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.textContent = `© 2025 gabriellengrvc. ${translations[currentLang].copyright}`;
    }

    const langBtn = document.querySelector('.lang-btn');
    langBtn.textContent = currentLang === 'fr' ? 'ENG' : 'FR';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const darkModeBtn = document.querySelector('.dark-mode-btn');

    if (document.body.classList.contains('dark-mode')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
        darkModeBtn.style.color = '#fff';  
    } else {
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
        darkModeBtn.style.color = '#000';  
    }
}
