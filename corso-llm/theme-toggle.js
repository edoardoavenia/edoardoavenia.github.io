// Gestione del tema dark/light
document.addEventListener('DOMContentLoaded', function() {
  // Sostituisci "Autore/autrice" con "Autore"
  const authorElements = document.querySelectorAll('.quarto-title-meta-contents');
  authorElements.forEach(element => {
    if (element.previousElementSibling && element.previousElementSibling.textContent.includes('Autore/autrice')) {
      element.previousElementSibling.textContent = 'Autore';
    }
  });
  
  // Recupera la preferenza salvata
  const savedTheme = localStorage.getItem('corso-llm-theme');
  const themeToggle = document.getElementById('theme-toggle');
  
  // Se c'è una preferenza salvata, applicala
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    if (themeToggle) {
      themeToggle.checked = true;
    }
  }
  
  // Gestisci il cambio tema
  if (themeToggle) {
    themeToggle.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('light-mode');
        localStorage.setItem('corso-llm-theme', 'light');
      } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('corso-llm-theme', 'dark');
      }
    });
  }
});