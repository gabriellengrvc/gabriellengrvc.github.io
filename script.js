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
