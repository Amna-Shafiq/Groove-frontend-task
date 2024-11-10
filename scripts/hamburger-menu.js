const hamburgerMenu = document.getElementById('hamburgerMenu');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const hamburgerIconClose = document.getElementById('hamburgerIconClose');
const hamburgerContent = document.getElementById('hamburgerContent');

// Add event listener to toggle menu
hamburgerMenu.addEventListener('click', () => {
    // Toggle the menu open/close
    hamburgerContent.classList.toggle('active');
    hamburgerMenu.classList.toggle('open');
});
