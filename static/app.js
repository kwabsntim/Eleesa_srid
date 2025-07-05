const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
// JavaScript to trigger the counters
const counters = document.querySelectorAll('.counter');
let started = false; // To prevent multiple triggers

function startCounter() {
  counters.forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

// Check if the stats section is in view
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

window.addEventListener('scroll', () => {
  const statsSection = document.querySelector('.stats-section');
  if (isInViewport(statsSection) && !started) {
    started = true; // Start the counters only once
    startCounter();
  }
});
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Get the text elements
const elements = document.querySelectorAll('.pic-section, .team-card, .yet-another-class');

// Add a scroll event listener
window.addEventListener('scroll', () => {
  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('visible'); // Add the animation class when in viewport
    }
  });
});
