// Theme Toggle Functionality
const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Update toggle button icon
    const toggleButton = document.querySelector('.theme-toggle');
    toggleButton.textContent = newTheme === 'light' ? '🌙' : '☀️';
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

        // Close the mobile menu after clicking a link
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.textContent = '☰'; // Reset to hamburger icon
        }
    });
});

// Show/hide back-to-top button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Hamburger Menu Toggle
const toggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');

    // Toggle between hamburger and close icon
    if (navLinks.classList.contains('active')) {
        hamburger.textContent = '✕'; // Change to close icon
    } else {
        hamburger.textContent = '☰'; // Change back to hamburger icon
    }
};