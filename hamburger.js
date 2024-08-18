// hamburger.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const tocBoxes = document.querySelector('.toc-boxes');

    if (!hamburger || !tocBoxes) {
        console.error('Hamburger or toc-boxes element not found');
        return;
    }

    hamburger.addEventListener('click', function() {
        tocBoxes.classList.toggle('showMenu'); // Toggle the menu visibility
    });
});
