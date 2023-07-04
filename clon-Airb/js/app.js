import sliderImagenes from "./slider-img.js";
import sliderNav from "./slider-nav.js";
import togle from "./togle.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
  sliderImagenes(".mySwiper", '.swiper-button-prev', '.swiper-button-next');
  sliderNav('.navegacion-lugar', '.slider-content', '.prev-button', '.next-button');
  togle(".mapa", ".mapa-btn",".login__mobile-text",".contenedor-estancias",".equis-est",".filter-m",".contenedor-filtros",".equis-filtr",".filtros-background-desk",".filter-d",".busqueda",".busqueda-desktop-click",".hr-header",".login__registro",".login__registrate");
})


