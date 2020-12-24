// REGISTRO Y ALMACENAMIENTO DE LOS DATOS

$(document).ready(function () {
    $("#registro").click(function () {
      let nombre = $("#usuario").val();
      let pass = $("#contrasena").val();
      console.log(nombre);
      console.log(pass);
      alert("Tus datos han sido registrados");
  
      localStorage.getItem("nombre");
  
      if (nombre && pass) {
        localStorage.setItem(nombre, pass);
        alert(`¡Hola ${nombre}, esperamos disfrutes este test!`);
      }
    });
    });


// MENSAJES DIVERTIDOS AL ESCRIBIR EN LOS INPUTS

$(usuario).keypress(function () {
    $(responde).text("Mmmm muy interesante...");
  });
  $(usuario).keyup(function () {
    $(responde).text("Escribes como si pertenecieras a...");
  });
  $(usuario).keydown(function () {
    $(responde).text("nono... mejor responde el test");
  });
  
  $(contrasena).keypress(function () {
    $(responde).text("Para que nadie robe tu contraseña ¡Protego totalum!");
  });