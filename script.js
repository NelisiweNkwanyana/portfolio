import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mountPortraitReveal } from './portrait.js';
import './projects.js';

gsap.registerPlugin(ScrollTrigger);

const progress = document.querySelector('.scroll-progress');
const navLinks = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');
const portraitFrame = document.querySelector('.hero-portrait');
const auraToggle = document.querySelector('.aura-toggle');
const auraLabel = auraToggle?.querySelector('.aura-label');
const pinkBtn = document.getElementById('projectsPinkBtn');

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

let portraitReveal = null;
let portraitLayer = 'photo';


/* =========================================
   SCROLL PROGRESS
========================================= */

function updateScrollProgress() {
  if (!progress) return;

  const max =
    document.documentElement.scrollHeight - window.innerHeight;

  const percentage = max > 0
    ? (window.scrollY / max) * 100
    : 0;

  progress.style.width = `${percentage}%`;
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();


/* =========================================
   MOBILE NAVIGATION
========================================= */

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks?.classList.toggle('open') ?? false;
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});


/* =========================================
   PORTRAIT WEBGL REVEAL
========================================= */

function setupPortraitReveal() {
  if (!portraitFrame) return;

  const canvas = portraitFrame.querySelector('[data-portrait-canvas]');
  const photoImg = portraitFrame.querySelector('[data-portrait-photo]');
  const altImg = portraitFrame.querySelector('[data-portrait-alt]');

  if (!canvas || !photoImg || !altImg) return;

  const start = () => {
    try {
      portraitReveal = mountPortraitReveal(canvas, photoImg, altImg, {
        reducedMotion: prefersReducedMotion,
        glow: '#ffd83d',
        // Both portraits keep their real proportions, share one height and stand on the
        // bottom of the hero. Lower size (e.g. 0.9) to make the portrait smaller.
        fit: { size: 1, anchor: 'bottom' },
      });

      portraitFrame.classList.add('is-webgl');

      if (!prefersReducedMotion) {
        portraitReveal.show('alt');
        window.setTimeout(() => portraitReveal.show('photo'), 200);
      } else {
        portraitReveal.show('photo');
      }

      window.reveal = portraitReveal;
    } catch (err) {
      console.warn('WebGL portrait reveal could not start. Falling back to plain images.', err);
      portraitFrame.classList.add('is-static');
      portraitFrame.setAttribute('data-layer', 'photo');
    }
  };

  const waitForImages = () => {
    if (photoImg.complete && altImg.complete && photoImg.naturalWidth && altImg.naturalWidth) {
      start();
    } else {
      let ready = 0;
      const onReady = () => { if (++ready === 2) start(); };
      photoImg.addEventListener('load', onReady, { once: true });
      altImg.addEventListener('load', onReady, { once: true });
      photoImg.addEventListener('error', onReady, { once: true });
      altImg.addEventListener('error', onReady, { once: true });
    }
  };

  waitForImages();

  window.addEventListener('pagehide', () => {
    portraitReveal?.destroy?.();
    portraitReveal = null;
  }, { once: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupPortraitReveal);
} else {
  setupPortraitReveal();
}


/* =========================================
   SHOW AURA / HIDE AURA TOGGLE
========================================= */

function toggleAura(event) {
  if (!portraitFrame || !auraToggle) return;

  const currentlyShowingAura = portraitLayer === 'alt';
  const nextLayer = currentlyShowingAura ? 'photo' : 'alt';
  portraitLayer = nextLayer;

  auraToggle.setAttribute('aria-pressed', String(nextLayer === 'alt'));

  if (auraLabel) {
    auraLabel.textContent = nextLayer === 'alt' ? 'HIDE AURA' : 'SHOW AURA';
  }

  auraToggle.setAttribute(
    'aria-label',
    nextLayer === 'alt'
      ? 'Switch back to the NELS portrait'
      : 'Reveal the AURA portrait'
  );

  if (!portraitReveal) {
    portraitFrame.setAttribute('data-layer', nextLayer);
    return;
  }

  portraitReveal.show(nextLayer === 'alt' ? 'alt' : 'photo');
}

auraToggle?.addEventListener('click', event => {
  event.stopPropagation();
  toggleAura(event);
});

portraitFrame?.addEventListener('click', event => {
  if (event.target.closest('.aura-toggle')) return;
  toggleAura(event);
});

portraitFrame?.addEventListener('keydown', event => {
  if (event.target.closest?.('.aura-toggle')) return;
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggleAura(event);
  }
});


/* =========================================
   PINK PROJECTS BUTTON
========================================= */

pinkBtn?.addEventListener('click', () => {
  pinkBtn.classList.add('is-active');

  window.setTimeout(() => {
    pinkBtn.classList.remove('is-active');
  }, 1400);

  const target = document.getElementById('projects');
  target?.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  });
});


/* =========================================
   REVEAL SECTIONS ON SCROLL
========================================= */

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach(element => {
    element.classList.add('is-visible');
  });
}


/* =========================================
   ACHIEVEMENT MODAL LOGIC
========================================= */

const achievementModal = document.getElementById('achievementModal');
const openAchievementBtn = document.getElementById('openAchievementModal');
const closeAchievementBtn = document.getElementById('closeAchievementModal');

// Open modal
if (openAchievementBtn && achievementModal) {
  openAchievementBtn.addEventListener('click', () => {
    achievementModal.showModal();
  });
}

// Close modal via X button
if (closeAchievementBtn && achievementModal) {
  closeAchievementBtn.addEventListener('click', () => {
    achievementModal.close();
  });
}

// Close modal when clicking outside the box (on the backdrop)
if (achievementModal) {
  achievementModal.addEventListener('click', (e) => {
    const dialogDimensions = achievementModal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      achievementModal.close();
    }
  });
}


/* =========================================
   SCROLL-DRIVEN EXPERIENCE
========================================= */

function setupScrollExperience() {
  if (typeof ScrollTrigger === 'undefined') return;
  if (prefersReducedMotion) return;

  const isDesktop = window.matchMedia('(min-width: 1001px)').matches;

  gsap.defaults({ ease: 'power3.out' });

  if (isDesktop) {
    gsap.to('.hero-portrait', {
      yPercent: -12, scale: 1.06, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.4 }
    });

    gsap.to('.hero-identity', {
      x: -80, opacity: 0.2, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'center top', scrub: 0.4 }
    });

    gsap.to('.hero-side-facts', {
      x: 60, opacity: 0, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: '60% top', scrub: 0.4 }
    });

    gsap.to('.hero-footer-bar', {
      opacity: 0, y: 30, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: '35% top', scrub: 0.4 }
    });
  }

  gsap.from('.intro-band p', {
    y: 60, opacity: 0, duration: 0.8,
    scrollTrigger: { trigger: '.intro-band', start: 'top 85%', toggleActions: 'play none none none' }
  });

  gsap.from('.band-index', {
    y: 30, opacity: 0, duration: 0.8, delay: 0.15,
    scrollTrigger: { trigger: '.intro-band', start: 'top 85%', toggleActions: 'play none none none' }
  });

  gsap.from('.about-title', {
    x: -80, opacity: 0, duration: 0.9,
    scrollTrigger: { trigger: '#about', start: 'top 80%', toggleActions: 'play none none none' }
  });

  gsap.from('.about-meta-line', {
    y: 20, opacity: 0, stagger: 0.12, duration: 0.7,
    scrollTrigger: { trigger: '#about', start: 'top 80%', toggleActions: 'play none none none' }
  });

  gsap.from('.about-lede', {
    y: 40, opacity: 0, stagger: 0.15, duration: 0.8,
    scrollTrigger: { trigger: '#about', start: 'top 80%', toggleActions: 'play none none none' }
  });

  gsap.from('.about-fact', {
    y: 30, opacity: 0, stagger: 0.15, duration: 0.7,
    scrollTrigger: { trigger: '#about', start: 'top 75%', toggleActions: 'play none none none' }
  });

  gsap.from('.edu-col', {
    y: 60, opacity: 0, duration: 0.9,
    scrollTrigger: { trigger: '#experience', start: 'top 80%', toggleActions: 'play none none none' }
  });

  gsap.from('.achievements h2', {
    x: -60, opacity: 0, duration: 0.8,
    scrollTrigger: { trigger: '#achievements', start: 'top 80%', toggleActions: 'play none none none' }
  });

  gsap.from('.achievement-card', {
    y: 60, opacity: 0, duration: 0.8,
    scrollTrigger: { trigger: '.achievement-card', start: 'top 85%', toggleActions: 'play none none none' }
  });

  gsap.from('.skills-heading-row h2', {
    y: 50, opacity: 0, duration: 0.8,
    scrollTrigger: { trigger: '#skills', start: 'top 80%', toggleActions: 'play none none none' }
  });

  gsap.from('.skill-panel', {
    y: 60, opacity: 0, stagger: 0.1, duration: 0.8,
    scrollTrigger: { trigger: '.skills-grid', start: 'top 85%', toggleActions: 'play none none none' }
  });

  document.querySelectorAll('.project-card').forEach(card => {
    gsap.from(card, {
      y: 70, opacity: 0, duration: 0.8,
      scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' }
    });
  });

  gsap.from('.projects-head h2', {
    y: 60, opacity: 0, duration: 0.8,
    scrollTrigger: { trigger: '#projects', start: 'top 80%', toggleActions: 'play none none none' }
  });

  gsap.from('.contact-inner h2', {
    y: 60, opacity: 0, duration: 0.9,
    scrollTrigger: { trigger: '#contact', start: 'top 85%', toggleActions: 'play none none none' }
  });

  gsap.from('.contact-bottom', {
    y: 40, opacity: 0, duration: 0.8,
    scrollTrigger: { trigger: '.contact-bottom', start: 'top 90%', toggleActions: 'play none none none' }
  });

  let lastY = window.scrollY;
  let hidden = false;

  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      const y = self.scroll();
      const goingDown = y > lastY;
      lastY = y;

      if (goingDown && y > 200 && !hidden) {
        hidden = true;
        gsap.to('.nav', { y: -80, duration: 0.35, ease: 'power2.out' });
      } else if (!goingDown && hidden) {
        hidden = false;
        gsap.to('.nav', { y: 0, duration: 0.35, ease: 'power2.out' });
      }
    }
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupScrollExperience);
} else {
  setupScrollExperience();
}

window.addEventListener('load', () => {
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.refresh();
  }
});