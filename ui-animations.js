/**
 * UI Animations - Scroll Reveals & Parallax Effects
 * Uses IntersectionObserver for performance-optimized scroll animations
 */

(function() {
  'use strict';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ==================== //
  // Intersection Observer for Scroll Reveals
  // ==================== //

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: Stop observing after animation
        // fadeInObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Elements to observe for fade-in animations
  const animatedElements = document.querySelectorAll(`
    .project-card,
    .service-card,
    .skill-category,
    .highlight-card,
    .timeline-item,
    .education-item,
    .fade-in,
    .stagger-children
  `);

  // Start observing elements
  animatedElements.forEach(el => {
    if (!prefersReducedMotion) {
      fadeInObserver.observe(el);
    } else {
      // If reduced motion, make elements visible immediately
      el.classList.add('visible');
    }
  });

  // ==================== //
  // Parallax Effect on Hero
  // ==================== //

  function initParallax() {
    if (prefersReducedMotion) return;

    const heroBackground = document.querySelector('.hero-background');
    const heroImage = document.querySelector('.hero-right');

    if (!heroBackground && !heroImage) return;

    let ticking = false;

    function updateParallax() {
      const scrolled = window.pageYOffset;
      const speed = 0.5;

      if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * speed}px)`;
      }

      if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
      }

      ticking = false;
    }

    function requestParallaxUpdate() {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
  }

  // ==================== //
  // Navbar Glass Effect on Scroll
  // ==================== //

  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;
    let ticking = false;

    function updateNavbar() {
      const scrolled = window.pageYOffset;

      if (scrolled > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Auto-hide navbar on scroll down (optional)
      if (scrolled > lastScroll && scrolled > 300) {
        navbar.classList.add('navbar-hidden');
      } else {
        navbar.classList.remove('navbar-hidden');
      }

      lastScroll = scrolled;
      ticking = false;
    }

    function requestNavUpdate() {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    }

    window.addEventListener('scroll', requestNavUpdate, { passive: true });
  }

  // ==================== //
  // Smooth Scroll for Anchor Links
  // ==================== //

  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        if (href === '#' || href === '') return;

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();
          const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
          const targetPosition = target.offsetTop - navHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
          });
        }
      });
    });
  }

  // ==================== //
  // Active Nav Link on Scroll
  // ==================== //

  function initActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    if (sections.length === 0 || navLinks.length === 0) return;

    let ticking = false;

    function updateActiveLink() {
      const scrollY = window.pageYOffset;
      const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });

      ticking = false;
    }

    function requestActiveUpdate() {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveLink);
        ticking = true;
      }
    }

    window.addEventListener('scroll', requestActiveUpdate, { passive: true });
  }

  // ==================== //
  // Card Stagger Animation
  // ==================== //

  function initStaggerAnimation() {
    if (prefersReducedMotion) return;

    const staggerContainers = document.querySelectorAll('.stagger-children');

    staggerContainers.forEach(container => {
      const children = container.children;
      Array.from(children).forEach((child, index) => {
        child.style.transitionDelay = `${index * 80}ms`;
      });
    });
  }

  // ==================== //
  // Neon Glow Effect on Mouse Move
  // ==================== //

  function initNeonGlow() {
    if (prefersReducedMotion) return;

    const cards = document.querySelectorAll('.project-card, .service-card, .highlight-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        this.style.setProperty('--mouse-x', `${x}px`);
        this.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // ==================== //
  // Typing Effect (Optional - for hero tagline)
  // ==================== //

  function initTypingEffect() {
    const typingElement = document.querySelector('[data-typing]');
    if (!typingElement || prefersReducedMotion) return;

    const text = typingElement.getAttribute('data-typing');
    const speed = 100;
    let index = 0;

    typingElement.textContent = '';

    function type() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      }
    }

    // Start typing after a delay
    setTimeout(type, 1000);
  }

  // ==================== //
  // Performance: Remove will-change after animation
  // ==================== //

  function cleanupWillChange() {
    const animatedEls = document.querySelectorAll('.will-animate');

    animatedEls.forEach(el => {
      el.addEventListener('animationend', function() {
        this.classList.remove('will-animate');
        this.classList.add('animation-complete');
      }, { once: true });
    });
  }

  // ==================== //
  // Mobile Menu Toggle (if not already implemented)
  // ==================== //

  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
      if (navOverlay) {
        navOverlay.classList.toggle('active');
      }
      document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking overlay
    if (navOverlay) {
      navOverlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        this.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    }

    // Close menu when clicking nav link
    const navLinkItems = navLinks.querySelectorAll('a');
    navLinkItems.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        if (navOverlay) {
          navOverlay.classList.remove('active');
        }
        document.body.classList.remove('menu-open');
      });
    });
  }

  // ==================== //
  // Lazy Load Images
  // ==================== //

  function initLazyLoad() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }

  // ==================== //
  // Initialize All Features
  // ==================== //

  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    console.log('🚀 UI Animations initialized');

    initParallax();
    initNavbarScroll();
    initSmoothScroll();
    initActiveNavLinks();
    initStaggerAnimation();
    initNeonGlow();
    initTypingEffect();
    cleanupWillChange();
    initMobileMenu();
    initLazyLoad();

    // Log performance info
    if (prefersReducedMotion) {
      console.log('♿ Reduced motion mode enabled');
    }
  }

  // Auto-initialize
  init();

  // Expose public API if needed
  window.UIAnimations = {
    prefersReducedMotion,
    fadeInObserver
  };

})();
