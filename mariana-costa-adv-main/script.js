// ===== MOBILE MENU TOGGLE =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenuBtn.addEventListener('click', function() {
  this.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileLinks.forEach(link => {
  link.addEventListener('click', function() {
    mobileMenuBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== SMOOTH SCROLL TO SECTION =====
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// ===== OPEN WHATSAPP =====
function openWhatsApp() {
  window.open(
    'https://wa.me/5521969600228?text=Olá%20Mariana%2C%20gostaria%20de%20agendar%20uma%20consultoria',
    '_blank'
  );
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.section-header, .practice-card, .testimonial-card, .urgency-content, .cta-content').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ===== PARALLAX EFFECT ON HERO (OPTIONAL) =====
window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero-bg');
  if (hero) {
    const scrolled = window.scrollY;
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// ===== TESTIMONIALS CAROUSEL INFINITE LOOP =====
const carouselTrack = document.getElementById('carouselTrack');
if (carouselTrack) {
  const cards = carouselTrack.innerHTML;
  // Duplicate the cards to create the infinite loop effect
  carouselTrack.innerHTML = cards + cards;
}
