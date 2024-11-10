function toggleDropdown() {
    document.querySelector('.language-options').classList.toggle('show');
}

function selectLanguage(lang) {
    const languageText = {
        en: 'English',
        es: 'Español'
        
    };
    const languageIcons = {
        en: 'assets/Mask Group 450@2x.png',
        es: 'assets/spain-flag.png'
    };

    document.querySelector('.selected-language').textContent = languageText[lang];
    document.querySelector('.selected-language-icon').src = languageIcons[lang];
    document.querySelector('.language-options').classList.remove('show');
}

// Close dropdown if clicked outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.language-switch')) {
        document.querySelector('.language-options').classList.remove('show');
    }
});
