//import sumar from "./sumador";
const nombre = document.querySelector("#nombre");
//alert(fecha);
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
var genero = document.querySelector("#genero").value;
var idioma = document.querySelector("#idioma").value;
var edad=document.querySelector("#edad").value;
if(idioma=="0")
{
  if(edad==="")
  {
    var titulo=" ";
  }
  if(edad>30 || edad==="")
  {
    if (genero === "1") 
    {
      titulo = "Sra. ";
    }
    else
    {
      if (genero === "2")
      {
        titulo = "Sr. ";
      }
    }
  }
  else
  {
    if (genero === "1") 
    {
      titulo = "Srta. ";
    } else 
    {
      if (genero === "2")
      {
        titulo = "Srto. ";
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
}
else
{
  if(edad==="")
  {
    titulo=" ";
  }
  if(edad>30 || edad==="")
  {
    if (genero === "1") 
    {
      titulo = "Mrs. ";
    }
    else
    {
      if (genero === "2")
      {
        titulo = "Mr. ";
      }
    }
  }
  else
  {
    if (genero === "1") 
    {
      titulo = "Ms. ";
    } else 
    {
      if (genero === "2")
      {
        titulo = "Mr. ";
      } 
    }
  }
  var saludo="Hello ";
  if(fecha.getHours()<12)
  {
    saludo="Good morning ";
  }
  else
  {
    if(fecha.getHours()<19)
    {
      saludo="Good afternoon ";
    }
    else
    {
      saludo="Good evening ";
    }
  }
}
  div.innerHTML = saludo+ titulo + nombre.value;
});

