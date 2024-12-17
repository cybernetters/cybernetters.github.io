// Smooth Scroll for Navigation
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Element with id "${href.substring(1)}" not found`);
      }
    }
  });
});

//Interactivity for marking topics
document.addEventListener("DOMContentLoaded", () => {
  const statusElements = document.querySelectorAll(".status");

  statusElements.forEach((status) => {
    status.addEventListener("click", () => {
      if (status.classList.contains("not-started")) {
        status.textContent = "In Progress";
        status.classList.remove("not-started");
        status.classList.add("in-progress");
      } else if (status.classList.contains("in-progress")) {
        status.textContent = "Completed";
        status.classList.remove("in-progress");
        status.classList.add("complete");
      }
    });
  });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Modal Functionality
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalText = document.getElementById('modal-text');

function openModal(content) {
  modalText.textContent = content;
  modal.style.display = 'flex';
}

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Scroll Animation
const animateOnScroll = () => {
  const elements = document.querySelectorAll('[data-animate]');
  const triggerHeight = window.innerHeight * 0.9;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerHeight) {
      el.classList.add('in-view');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

const matrixContainer = document.getElementById('matrix-animation');

// Generate random matrix characters
const createMatrixRain = () => {
  const container = document.querySelector('.matrix-rain-container');
  for (let i = 0; i < 100; i++) {
    const matrixChar = document.createElement('div');
    matrixChar.textContent = String.fromCharCode(0x30A0 + Math.random() * 96); // Random Katakana
    matrixChar.style.position = 'absolute';
    matrixChar.style.left = Math.random() * window.innerWidth + 'px';
    matrixChar.style.top = Math.random() * window.innerHeight + 'px';
    matrixChar.className = 'matrix-char';
    matrixChar.style.animationDuration = 2 + Math.random() * 3 + 's'; // Random speed
    container.appendChild(matrixChar);
  }
};

createMatrixRain();


// Toggle between Sign In and Sign Up forms
function toggleForms() {
  var signinForm = document.getElementById('signin-form');
  var signupForm = document.getElementById('signup-form');
  
  if (signinForm.style.display === 'none') {
    signinForm.style.display = 'block';
    signupForm.style.display = 'none';
  } else {
    signinForm.style.display = 'none';
    signupForm.style.display = 'block';
  }
}

// JavaScript for Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});

