// Mobile navigation toggle
const nav = document.querySelector('nav ul');
document.querySelector('nav').addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Form validation (example)
document.querySelector('form').addEventListener('submit', (e) => {
  const email = document.querySelector('input[type="email"]');
  if (!email.value.includes('@')) {
    alert('Please enter a valid email address');
    e.preventDefault();
  }
});
