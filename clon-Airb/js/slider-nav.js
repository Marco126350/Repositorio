export default function sliderNav(sliderContainer,slider,prevButton,nextButton) {
var sliderContainer = document.querySelector(sliderContainer);
var slider = document.querySelector(slider);
var prevButton = document.querySelector(prevButton);
var nextButton = document.querySelector(nextButton);

var currentIndex = 0;
var itemWidth = slider.children[0].offsetWidth;

function slideNext() {
  currentIndex++;

  if (currentIndex >= slider.children.length) {
    currentIndex = 0;
  }

  slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function slidePrev() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slider.children.length - 1;
  }

  slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Ajusta el ancho del contenedor al cargar la página o redimensionar la ventana
window.addEventListener('load', adjustContainerWidth);
window.addEventListener('resize', adjustContainerWidth);

function adjustContainerWidth() {
  itemWidth = slider.children[0].offsetWidth;
  slider.style.width = `${slider.children.length * itemWidth}px`;
}

// Eventos de clic para los botones de navegación
prevButton.addEventListener('click', slidePrev);
nextButton.addEventListener('click', slideNext);

}