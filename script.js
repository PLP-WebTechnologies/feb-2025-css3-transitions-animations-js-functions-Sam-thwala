

function savePref(key, value) {
  localStorage.setItem(key, value);
}
function loadPref(key, defaultValue = null) {
  return localStorage.getItem(key) ?? defaultValue;
}


function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
}


const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const current = loadPref('theme', 'light');
  const next = current === 'light' ? 'dark' : 'light';
  applyTheme(next);
  savePref('theme', next);
  
  themeToggle.style.transform = 'scale(1.1)';
  setTimeout(() => themeToggle.style.transform = '', 200);
});


const heroImage = document.getElementById('heroImage');
heroImage.addEventListener('click', () => {
  heroImage.classList.add('pulse');
 
  heroImage.addEventListener('animationend', () => {
    heroImage.classList.remove('pulse');
  }, { once: true });
});


document.addEventListener('DOMContentLoaded', () => {
  applyTheme(loadPref('theme', 'light'));
});





