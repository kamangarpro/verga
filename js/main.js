// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    // If lucide is available globally via script tag
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Simple scroll animation for navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const body = document.body;

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            body.style.overflow = 'hidden';
            mobileOverlay.style.display = 'block';
        } else {
            body.style.overflow = '';
            setTimeout(() => {
                mobileOverlay.style.display = 'none';
            }, 300);
        }
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        mobileOverlay.classList.remove('active');
        body.style.overflow = '';
        setTimeout(() => {
            mobileOverlay.style.display = 'none';
        }, 300);
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeMenu);
    }

    // Close menu when clicking on a link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close menu on window resize if open
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Optional: Support system preference if no saved theme
        // body.setAttribute('data-theme', 'dark');
        // updateIcon('dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateIcon(newTheme);
        });
    }

    function updateIcon(theme) {
        if (!themeIcon) return;
        
        if (theme === 'dark') {
            themeIcon.setAttribute('data-lucide', 'sun');
        } else {
            themeIcon.setAttribute('data-lucide', 'moon');
        }
        
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    // Scroll Reveal Animation Logic
    const revealElements = document.querySelectorAll(
        '.section-title, .section-desc, .hero-content, .hero-visual, .feature-card, .gallery-item, .article-card, .founder-content, .guarantee-card, .factory-image, .factory-content, .location-card, .contact-info'
    );

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed to improve performance
                observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px"
    });

    revealElements.forEach((el, index) => {
        el.classList.add('reveal');
        // Add staggered delays for grid items
        if (el.classList.contains('feature-card') || el.classList.contains('gallery-item') || el.classList.contains('article-card')) {
             // Simple stagger based on DOM order or could be more complex
             // For now, let's just let them naturally reveal as they scroll
        }
        revealObserver.observe(el);
    });
});
