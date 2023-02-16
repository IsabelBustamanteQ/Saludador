//import sumar from "./sumador";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#saludo-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //const firstNumber = Number.parseInt(first.value);
  //const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "Hola "+nombre.value;
});

