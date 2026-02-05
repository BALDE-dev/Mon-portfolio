//  MENU EMPILE
const boutonMenu = document.getElementById('bouton-menu');
const liensNavigation = document.getElementById('liens-navigation');

boutonMenu.addEventListener('click', () => {
  liensNavigation.classList.toggle('actif');
});

document.addEventListener("DOMContentLoaded", () => {
  const liensNav = document.querySelectorAll('.liens-navigation a');

  liensNav.forEach(lien => {
    lien.addEventListener('click', e => {
      e.preventDefault(); 

      const targetId = lien.getAttribute('href').substring(1);
      const section = document.getElementById(targetId);

      if (section) {
        window.scrollTo({
          top: section.offsetTop - 70, 
          behavior: 'smooth'
        });
      }
    });
  });
});

const liens = document.querySelectorAll('.liens-navigation a');

liens.forEach(lien => {
  lien.addEventListener('click', () => {
    liensNavigation.classList.remove('actif');
  });
});

// Animation cartes projets au scroll
const cartesProjets = document.querySelectorAll('.carte-projet');

const observerProjets = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

cartesProjets.forEach(carte => observerProjets.observe(carte));

// ================== ANIMATION D'APPARITION ==================
const elementsReveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  elementsReveals.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
});
