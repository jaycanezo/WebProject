// scroll-animation.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navLinks.classList.contains('active') && 
            !event.target.closest('.navbar')) {
            navLinks.classList.remove('active');
        }
    });
    
    // Intersection Observer for fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Configure the observer
    const observerOptions = {
        root: null, // use viewport as root
        rootMargin: '0px',
        threshold: 0.15 // element is 15% visible
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animation is triggered to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Start observing all fade-in elements
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // Initial check for elements that are already in view on page load
    setTimeout(() => {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
                observer.unobserve(element);
            }
        });
    }, 100);
});