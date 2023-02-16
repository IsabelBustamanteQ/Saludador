//import sumar from "./sumador";
const nombre = document.querySelector("#nombre");
//alert(fecha);
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
var genero = document.querySelector("#genero").value;
var edad=document.querySelector("#edad").value;
if(edad ==="")
{
var x="";
} 
  if(edad>30 || edad==="")
  {
    if (genero === "1") 
    {
      x = "Sra. ";
    }
    else
    {
      if (genero === "2")
      {
        x = "Sr. ";
      }
      else
      {
        if (genero === "3" )
        {
          x = "Sre. ";
        } 
      }
    }
  }
  else
  {
    if (genero === "1") {
      x = "Srta. ";
    } else {
      if (genero === "2") {
          x = "Srto. ";
        } else {
          if (genero === "3" ) {
              x = "Srte. ";
            } 
        }
    }
  }
  var saludo="Hola";
  if(fecha.getHours()<12)
  {
    saludo="Buenos días ";
  }
  else
  {
    if(fecha.getHours()<19)
    {
      saludo="Buenas Tardes ";
    }
    else
    {
      saludo="Buenas Noches ";
    }
  }
  div.innerHTML = saludo+ x + nombre.value;
});

