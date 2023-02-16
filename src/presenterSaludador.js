//import sumar from "./sumador";

const nombre = document.querySelector("#nombre");
var genero = document.querySelector("#genero").value;
//var selected=genero.options[genero.selectexIndex].text;
//alert(genero);
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
var genero = document.querySelector("#genero").value;
var x="";
  if (genero === "1") {
    x = "Sra.";
  } else {
    if (genero === "2") {
        x = "Sr.";
      } else {
        if (genero === "3" ) {
            x = "Sre.";
          } 
      }
  }
  div.innerHTML = "Hola "+ x + nombre.value;
});

