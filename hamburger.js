document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector('.menu');
    const tocItems = document.querySelectorAll('.toc-box');

    // Toggle menu visibility when hamburger button is clicked
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('showMenu');
        hamburger.classList.toggle("active");
    });

    // Close menu when a TOC item is clicked
    tocItems.forEach(item => {
        item.addEventListener('click', function() {
            menu.classList.remove('showMenu');
            hamburger.classList.toggle("active");
        });
    });
});