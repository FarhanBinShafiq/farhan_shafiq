// Theme Toggle Functionality
const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    document.querySelector('.theme-toggle').textContent = newTheme === 'light' ? '🌙' : '☀️';
};

// Load Theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
document.querySelector('.theme-toggle').textContent = savedTheme === 'light' ? '🌙' : '☀️';

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        toggleMenu();
    });
});

// Show/hide back-to-top button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Hamburger Menu Toggle
const toggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
};

// Initialize Animations on Load
document.addEventListener('DOMContentLoaded', () => {
    // Delay animations to ensure they trigger visibly
    setTimeout(() => {
        const roles = document.querySelectorAll('.animated-role');
        let index = 0;

        function showNextRole() {
            roles.forEach(role => role.style.opacity = '0');
            roles[index].style.opacity = '1';
            index = (index + 1) % roles.length;
            setTimeout(showNextRole, 3000);
        }

        showNextRole();
    }, 500);
});