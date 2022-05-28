//  seleccionamos los dos elementos que se pueden clickear

const toggleButton = document.getElementById("id_boton");
const navWrapper = document.getElementById("id_nav");

/* 
  cada vez que se haga click en el botón 
  pone y saca las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

/* 
  Cuándo se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/

navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});