document.addEventListener('DOMContentLoaded', () => {
// Follow cursor with icons
const floatingIcons = document.querySelectorAll('.floating-icon img');

// Track cursor movement
let mouseX = 0, mouseY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 100 - 50; // Normalize to -50 to 50
    mouseY = (e.clientY / window.innerHeight) * 100 - 50;
});

function animateIcons() {
    floatingIcons.forEach((icon, index) => {
        // Calculate movement with index offset for natural lag
        const offset = (index + 1) * 0.05; // Different movement speed
        icon.parentElement.style.transform = `translate(${mouseX * offset}px, ${mouseY * offset}px)`;
    });

    requestAnimationFrame(animateIcons);
}

animateIcons();

    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                // Close mobile nav if open
                if (mobileNavLinks.classList.contains('active')) {
                    mobileNavLinks.classList.remove('active');
                    hamburgerMenu.classList.remove('active');
                }
            }
        });
    });

    // "Get Started" button scroll
    const getStartedBtn = document.querySelector('.get-started');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', () => {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // "View My Work" button scroll
    const viewWorkBtn = document.querySelector('.hero .primary-btn');
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', () => {
            const projectsSection = document.querySelector('#projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // "Let's Connect" button scroll (from hero)
    const contactMeBtnHero = document.querySelector('.hero .secondary-btn');
    if (contactMeBtnHero) {
        contactMeBtnHero.addEventListener('click', () => {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Hamburger menu toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavLinks = document.querySelector('.nav-links');
    if (hamburgerMenu && mobileNavLinks) {
        hamburgerMenu.addEventListener('click', () => {
            mobileNavLinks.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    }

    // Intersection Observer for scroll animations
    const animatedElements = document.querySelectorAll('.stat, .hero-text, .main-title, .skill-item, .project-card, .experience-card, .education-card, .info-section h2, #skills h2, #projects h2, #experience h2, #education h2, #contact h2, .about-image, .about-text p, .about-text ul');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: unobserve after animation
            }
        });
    }, {
        threshold: 0.1, // Lower threshold for earlier trigger
        rootMargin: "0px 0px -50px 0px" // Trigger a bit before it's fully in view
    });

    animatedElements.forEach(el => {
        // Initial state set via CSS for elements that will be animated
        // This avoids a flash of unstyled content if JS loads late.
        // We ensure elements are hidden via CSS initially and then made visible by JS.
        // Example CSS for these elements:
        // .stat, .hero-text { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
        // .visible { opacity: 1; transform: translateY(0); }
        observer.observe(el);
    });

    // Active nav link highlighting on scroll
    const sections = document.querySelectorAll('main section[id]');
    const desktopNavLinks = document.querySelectorAll('.navbar .nav-links a:not(.resume-btn)'); // Exclude resume button

    function changeNavActiveState() {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Check if section is in viewport (with a bit of offset for fixed nav)
            if (pageYOffset >= (sectionTop - sectionHeight / 3 - 70)) { // 70px for navbar height
                currentSectionId = section.getAttribute('id');
            }
        });

        desktopNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }
    // Initial call and on scroll
    changeNavActiveState();
    window.addEventListener('scroll', changeNavActiveState);

    // No need to dynamically add .visible styles if they are already in CSS
    // The old style tag creation is removed.
});
