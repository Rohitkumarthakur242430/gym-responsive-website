// Responsive NavBar Toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('nav-active');
    }
});
