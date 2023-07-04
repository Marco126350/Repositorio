const menu = document.querySelector(".hamburguesa");
const navegacion = document.querySelector(".navegacion");
const navegaciona = document.querySelectorAll(".navegacion a");
const imagenes = document.querySelectorAll("img");
const btnTodos = document.querySelector(".todos");
const btnEnsaladas = document.querySelector(".ensaladas");
const btnPasta = document.querySelector(".pasta");
const btnPizza = document.querySelector(".pizza");
const btnPostres = document.querySelector(".postres");
const contenedorPlatillo = document.querySelector(".platillos");
// la siguiente linea sirve para hacer que una funcion expresada pueda ejecutase antes de declararse, que tenga la funcion de una funcion expresada
document.addEventListener("DOMContentLoaded", () => {
  eventos();
  platillos();
});


const eventos = () => {
  menu.addEventListener("click", abrirMenu);
};
const abrirMenu = () => {
  navegacion.classList.remove("ocultar");
  botonCerrar();
};

const botonCerrar = () => {
  const btnCerrar = document.createElement("p");
  const overlay = document.createElement("div");
  overlay.classList.add("pantalla-completa");
  const body = document.querySelector("body");
  if (document.querySelectorAll(".pantalla-completa").length > 0) return;
  body.appendChild(overlay);
  btnCerrar.textContent = "x";
  btnCerrar.classList.add("btnCerrar");
  navegacion.appendChild(btnCerrar);
  cerrarMenu(btnCerrar, overlay);
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const imagen = entry.target;
      imagen.src = imagen.dataset.src;
      observer.unobserve(imagen);
    }
  });
});

imagenes.forEach((imagen) => {
  observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) => {
  boton.addEventListener("click", () => {
    navegacion.classList.add("ocultar");
    overlay.remove();
    boton.remove();
  });
  overlay.onclick = function () {
    overlay.remove();
    navegacion.classList.add("ocultar");
    boton.remove();
  };
};

const platillos = () => {
  let platillosArreglo = [];
  const platillos = document.querySelectorAll(".platillo");

  platillos.forEach(
    (platillo) => (platillosArreglo = [...platillosArreglo, platillo])
  );

  const ensaladas = platillosArreglo.filter(
    (ensalada) => ensalada.getAttribute("data-platillo") === "ensalada"
  );
  const pasta = platillosArreglo.filter(
    (pasta) => pasta.getAttribute("data-platillo") === "pasta"
  );
  const pizza = platillosArreglo.filter(
    (pizza) => pizza.getAttribute("data-platillo") === "pizza"
  );
  const postres = platillosArreglo.filter(
    (postres) => postres.getAttribute("data-platillo") === "postre"
  );
  mostrarPlatillos(ensaladas, pasta, pizza, postres, platillosArreglo);
};

const mostrarPlatillos = (ensaladas, pastas, pizza, postres, todos) => {
  btnEnsaladas.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillo);
    ensaladas.forEach((ensalada) => contenedorPlatillo.appendChild(ensalada));
  });
  btnPasta.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillo);
    pastas.forEach((pasta) => contenedorPlatillo.appendChild(pasta));
  });
  btnPizza.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillo);
    pizza.forEach((pizzas) => contenedorPlatillo.appendChild(pizzas));
  });
  btnPostres.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillo);
    postres.forEach((postre) => contenedorPlatillo.appendChild(postre));
  });
  btnTodos.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillo);
    todos.forEach((todo) => contenedorPlatillo.appendChild(todo));
  });
};

const limpiarHtml = (contenedor) => {
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
};
