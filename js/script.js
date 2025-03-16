// Theme Toggle Functionality
const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    document.querySelector('.theme-toggle').textContent = newTheme === 'light' ? '🌙' : '☀️';
    console.log('Theme switched to:', newTheme); // Debug log
};

// Load Theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.querySelector('.theme-toggle').textContent = savedTheme === 'light' ? '🌙' : '☀️';
    console.log('Initial theme loaded:', savedTheme); // Debug log
});

// Hamburger Menu Toggle
const toggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const isActive = navLinks.classList.contains('active');

    // Toggle the active class on nav-links and hamburger
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');

    // Update the hamburger icon
    hamburger.textContent = isActive ? '☰' : '✕';

    // Prevent body scrolling when menu is open
    document.body.style.overflow = isActive ? 'auto' : 'hidden';

    // Ensure the menu closes properly by resetting visibility transition delay
    if (!isActive) {
        navLinks.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
    } else {
        navLinks.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0s linear 0.3s';
    }
};

// Smooth scrolling for navigation and close menu on link click
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Close the menu after clicking a link (on mobile)
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Show/hide back-to-top button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Reset menu state on window resize
window.addEventListener('resize', () => {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.textContent = '☰';
        document.body.style.overflow = 'auto';
    }
});

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