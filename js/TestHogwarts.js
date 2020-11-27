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

  $("#escudo1").hide();
  $("#escudo2").hide();
  $("#escudo3").hide();
  $("#escudo4").hide();
});

function CasaHogwarts() {
  this.caracteristicas = [];

  this.puntosG = 0;
  this.puntosR = 0;
  this.puntosS = 0;
  this.puntosH = 0;

  // Test

  $("#padre1").append(`<p>  La varita que te ha elegido es: </p>`).css({ "font-weight": "bolder", "font-size": "20px" });

  this.preguntarVarita = function () {
    let respuestaVarita = Math.floor(Math.random() * 4);

    if (respuestaVarita == 0) {
      this.puntosG += 10;
      this.caracteristicas.push("Varita de fenix");
      $("#padre1").append(`<p> Varita numero ${respuestaVarita}, Varita de fenix </p>`);
    } else if (respuestaVarita == 1) {
      this.puntosR += 10;
      this.caracteristicas.push("Varita de dragon");
      $("#padre1").append(`<p> Varita numero ${respuestaVarita}, Varita de dragon </p>`);
    } else if (respuestaVarita == 2) {
      this.puntosH += 10;
      this.caracteristicas.push("Varita de unicornio");
      $("#padre1").append(`<p> Varita numero ${respuestaVarita}, Varita de unicornio </p>`);
    } else if (respuestaVarita == 3) {
      this.puntosS += 10;
      this.caracteristicas.push("Varita de sauco");
      $("#padre1").append(`<p> Varita numero ${respuestaVarita}, Varita de sauco </p>`);
    }
  };

  $("#padre2").append(`<p>  De estas cualidades, ¿Cuál te representa más?: </p>`).css({ "font-weight": "bolder", "font-size": "20px" });

  this.preguntarPersona = function () {
    if ($("#respuesta2").val() == "valentia") {
      this.puntosG += 10;
      this.caracteristicas.push("valentia");
      $("#padre2").append(`<p> 10 puntos para Gryffindor </p>`);
    } else if ($("#respuesta2").val() == "sabiduria") {
      this.puntosR += 10;
      this.caracteristicas.push("sabiduria");
      $("#padre2").append(`<p> 10 puntos para Ravenclaw </p>`);
    } else if ($("#respuesta2").val() == "honestidad") {
      this.puntosH += 10;
      this.caracteristicas.push("honestidad");
      $("#padre2").append(`<p> 10 puntos para Hufflepuff </p>`);
    } else if ($("#respuesta2").val() == "ambicion") {
      this.puntosS += 10;
      this.caracteristicas.push("ambicion");
      $("#padre2").append(`<p> 10 puntos para Slytherin </p>`);
    } else {
      console.log("Solo se admiten las cualidades mencionadas: valentia, sabiduria, ambicion, honestidad");
    }
  };

  $("#padre3").append(`<p> ¿Cuál es tu linaje? </p>`).css({ "font-weight": "bolder", "font-size": "20px" });

  this.preguntarLinaje = function () {
    if ($("#respuesta3").val() == "padres magos") {
      this.puntosG += 10;
      this.caracteristicas.push("padres magos");
      $("#padre3").append(`<p> Eres 100% magico </p>`);
    } else if ($("#respuesta3").val() == "padres muggles") {
      this.puntosR += 10;
      this.caracteristicas.push("padres muggles");
      $("#padre3").append(`<p> Eres mestizo </p>`);
    } else if ($("#respuesta3").val() == "madre muggle y padre mago") {
      this.puntosH += 10;
      this.caracteristicas.push("madre muggle y padre mago");
      $("#padre3").append(`<p> Eres mestizo </p>`);
    } else if ($("#respuesta3").val() == "madre bruja y padre muggle") {
      this.puntosS += 10;
      this.caracteristicas.push("madre bruja y padre muggle");
      $("#padre3").append(`<p> Eres mestizo </p>`);
    }
  };

  $("#padre4").append(`<p>  ¿Que reliquia eliges? </p>`).css({ "font-weight": "bolder", "font-size": "20px" });

  this.elijeReliquia = function () {
    switch ($("#respuesta4").val()) {
      case "espada":
        $("#padre4").append(`<p> Has elegido la espada de Gryffindor </p>`);
        this.puntosG += 10;
        this.caracteristicas.push("Espada");
        break;
      case "diadema":
        $("#padre4").append(`<p> Has elegido la diadema de Ravenclaw </p>`);
        this.puntosR += 10;
        this.caracteristicas.push("Diadema");
        break;
      case "copa":
        $("#padre4").append(`<p> Has elegido la copa de Hufflepuff </p>`);
        this.puntosH += 10;
        this.caracteristicas.push("Copa");
        break;
      case "guardapelo":
        $("#padre4").append(`<p> Has elegido el guardapelo de Slytherin </p>`);
        this.puntosS += 10;
        this.caracteristicas.push("Guardapelo");
        break;
      default:
        console.log("Debes elegir entre las opciones que te brindamos");
        break;
    }
  };

  // Puntaje

  this.saberCasa = function () {
    var resultadoFinal = Math.max(this.puntosG, this.puntosR, this.puntosH, this.puntosS);

    switch (resultadoFinal) {
      case this.puntosG:
        $("#enviar")
          .append(`<p> ¡Felicidades!  Perteneces a Gryffindor </p>`)
          .css({ color: "red", "font-size": "70px", "font-weight": "bolder", "font-family": "Harry Potter", "letter-spacing": "7px" });
        Escudo.mostrarEscudo();
        break;
      case this.puntosR:
        $("#enviar")
          .append(`<p> ¡Felicidades! Perteneces a Ravenclaw </p>`)
          .css({ color: "blue", "font-size": "70px", "font-weight": "bolder", "font-family": "Harry Potter", "letter-spacing": "7px" });
        Escudo.mostrarEscudo2();
        break;
      case this.puntosH:
        $("#enviar")
          .append(`<p> ¡Felicidades! Perteneces a Hufflepuff </p>`)
          .css({ color: "brown", "font-size": "70px", "font-weight": "bolder", "font-family": "Harry Potter", "letter-spacing": "7px" });
        Escudo.mostrarEscudo3();
        break;
      case this.puntosS:
        $("#enviar")
          .append(`<p> ¡Felicidades! Perteneces a Slytherin </p>`)
          .css({ color: "green", "font-size": "70px", "font-weight": "bolder", "font-family": "Harry Potter", "letter-spacing": "7px" });
        Escudo.mostrarEscudo4();
        break;
      default:
        alert("Lo siento, no hemos podido averiguarlo");
    }

    console.log(this.caracteristicas);
    alert("Has sumado: " + resultadoFinal + " puntos");
  };
}

let resultado = new CasaHogwarts();

$("#saber-casa").click(function () {
  resultado.preguntarVarita();
  resultado.preguntarPersona();
  resultado.preguntarLinaje();
  resultado.elijeReliquia();
  resultado.saberCasa();
});

let Escudo = new escudos();

function escudos() {
  this.mostrarEscudo = function () {
    $("#escudo1").fadeIn(5000);
  };
  this.mostrarEscudo2 = function () {
    $("#escudo2").fadeIn(5000);
  };
  this.mostrarEscudo3 = function () {
    $("#escudo3").fadeIn(5000);
  };
  this.mostrarEscudo4 = function () {
    $("#escudo4").fadeIn(5000);
  };
}
// prettier-ignore

$("#casas").click(function () {
  gJSON = '{"Nombre": "Godric ", "Habilidades": "  Espadachín", "Animal": "  , León. " }';
  rJSON = '{"Nombre": "Rowena", "Habilidades": "  Arquitectura mágica", "Animal": "  , Cuervo. "}';
  hJSON = '{"Nombre": "Helga", "Habilidades": "  Encantamientos de Cocina", "Animal": "  , Tejon. " }';
  sJSON = '{"Nombre": "Salazar", "Habilidades": "  Legeremancia", "Animal": "  , Serpiente. " }'; 

  var gObjeto = JSON.parse(gJSON);
  document.write(" - Gryffindor:  ");
  document.write(gObjeto.Habilidades)
  document.write(gObjeto.Animal);
  var rObjeto = JSON.parse(rJSON);
  document.write(" - Ravenclaw:  ");
  document.write(rObjeto.Habilidades);
  document.write(rObjeto.Animal);
  var hObjeto = JSON.parse(hJSON);
  document.write(" - Hufflepuff:  ");
  document.write(hObjeto.Habilidades);
  document.write(hObjeto.Animal);
  var sObjeto = JSON.parse(sJSON);
  document.write(" - Slytherin:  ");
  document.write(sObjeto.Habilidades);
  document.write(sObjeto.Animal);

});

$("#light").hide();

$("#lumus").click(function () {
  $("#hat").hide();
  $("#light").fadeIn();
});

$("#char").click(function () {
  $.ajax({
    url: "http://hp-api.herokuapp.com/api/characters/house/gryffindor",
    dataType: "json",
    type: "get",
    success: function (response) {
      let getJson = response;
      getJson.forEach(function (chars) {
        $("#lista-de-personajes")
          .append(`<li>${chars.name} , ${chars.species} , ${chars.gender} , ${chars.patronus}</li>`)
          .css({ "font-size": "20px", "letter-spacing": "5px", "list-style": "none", margin: "23x" });
      });
    },
  });
});

$("#repetir").click(function (e) {
  location.reload();
});
