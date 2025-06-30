// Gestione del tema dark/light
document.addEventListener('DOMContentLoaded', function() {
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