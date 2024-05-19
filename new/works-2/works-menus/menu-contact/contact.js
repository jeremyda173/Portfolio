// Opcional: Agregar animaciones con JavaScript
const options = document.querySelectorAll('.option');

options.forEach(option => {
  option.addEventListener('mouseover', () => {
    option.classList.add('animated');
  });

  option.addEventListener('mouseout', () => {
    option.classList.remove('animated');
  });
});
