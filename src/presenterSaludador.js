//import sumar from "./sumador";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //const firstNumber = Number.parseInt(first.value);
  //const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "Hola "+nombre.value;
});

