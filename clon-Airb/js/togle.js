export default function togle(mapa,mapaBtn,loginM,contEst,equis,iconFiltr,contFiltr,equisFiltr,filtrbackgroundDesk,filtrIconDesk,busqueda,busquedaDesktop,hrHeader,iconRegistro,loginRegistro) {
  const d = document;
  d.addEventListener("click", e => {
    // maps
    if (e.target.matches(mapaBtn) || e.target.matches(`${mapaBtn} *`)) {
      d.querySelector(mapa).classList.toggle("is-active");
    }

    // estancias
    if (e.target.matches(loginM) || e.target.matches(`${loginM} *`)) {
      d.querySelector(contEst).classList.add("is-active");
    }
    if (e.target.matches(equis)) {
      d.querySelector(contEst).classList.remove("is-active");
    }

    // filtros
    if (e.target.matches(iconFiltr)) {
      d.querySelector(contFiltr).classList.add("is-active");
      d.querySelector(filtrbackgroundDesk).classList.add("is-active");
    }
    if (e.target.matches(equisFiltr)) {
      d.querySelector(contFiltr).classList.remove("is-active");
      d.querySelector(filtrbackgroundDesk).classList.remove("is-active");
    }

    // filtros-desk
      if (e.target.matches(filtrIconDesk)) {
      d.querySelector(contFiltr).classList.add("is-active");
      d.querySelector(filtrbackgroundDesk).classList.add("is-active");
    }

    // busqueda-desk
    if (e.target.matches(busqueda) || e.target.matches(`${busqueda} *`)) {
      d.querySelector(busqueda).classList.add("display-none");
      d.querySelector(busquedaDesktop).classList.add("display-flex");
      d.querySelector(hrHeader).classList.add("display-none");
    }

    if (e.target.matches(busquedaDesktop) || e.target.matches(`${busquedaDesktop} *`)) {
      d.querySelector(busquedaDesktop).classList.remove("display-flex");
      d.querySelector(busqueda).classList.remove("display-none");
      d.querySelector(hrHeader).classList.remove("display-none")
    }

    // registrate-desk
    if (e.target.matches(iconRegistro) || e.target.matches(`${iconRegistro} *`)) {
      d.querySelector(loginRegistro).classList.toggle("is-active");
    }

  })
}