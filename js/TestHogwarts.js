// REGISTRO Y ALMACENAMIENTO DE LOS DATOS

$(document).ready(function () {
  $("#look").hide();

  $("#escudo1").hide();
  $("#escudo2").hide();
  $("#escudo3").hide();
  $("#escudo4").hide();
});

// ARRAYS PARA SUMAR PUNTOS

function CasaHogwarts() {
  this.caracteristicas = [];

  this.puntosG = 0;
  this.puntosR = 0;
  this.puntosS = 0;
  this.puntosH = 0;

  // TEST DE 4 PREGUNTAS, LA 1 AL AZAR

  $("#padre1").append(`<p> Una varita te elegirá al finalizar la prueba. Recuerda <i> observar. </i></p>`).css({ "font-weight": "bolder", "font-size": "20px" });

  this.preguntarVarita = function () {
    let respuestaVarita = Math.floor(Math.random() * 4);
    let varas = $("#padre1").text(`Varita número ${respuestaVarita}, `);

    if (respuestaVarita == 0) {
      this.puntosG += 10;
      this.caracteristicas.push("Varita de fenix");
      varas.append(`<p>de fenix </p>`);
    } else if (respuestaVarita == 1) {
      this.puntosR += 10;
      this.caracteristicas.push("Varita de dragon");
      varas.append(`<p>de dragon </p>`);
    } else if (respuestaVarita == 2) {
      this.puntosH += 10;
      this.caracteristicas.push("Varita de unicornio");
      varas.append(`<p>de unicornio </p>`);
    } else if (respuestaVarita == 3) {
      this.puntosS += 10;
      this.caracteristicas.push("Varita de sauco");
      varas.append(`<p>de sauco </p>`);
    }
  };

  $("<p>De estas cualidades, ¿Cuál te representa más?: </p>").prependTo($("#padre2")).css({ "font-weight": "bolder", "font-size": "20px" });

  this.preguntarPersona = function () {
    if ($("#respuesta2").val() == "valentia") {
      this.puntosG += 10;
      this.caracteristicas.push("valentia");
      $("#enviar").append(`<p>10 puntos para Gryffindor </p>`);
    } else if ($("#respuesta2").val() == "sabiduria") {
      this.puntosR += 10;
      this.caracteristicas.push("sabiduria");
      $("#enviar").append(`<p> 10 puntos para Ravenclaw </p>`);
    } else if ($("#respuesta2").val() == "honestidad") {
      this.puntosH += 10;
      this.caracteristicas.push("honestidad");
      $("#enviar").append(`<p> 10 puntos para Hufflepuff </p>`);
    } else if ($("#respuesta2").val() == "ambicion") {
      this.puntosS += 10;
      this.caracteristicas.push("ambicion");
      $("#enviar").append(`<p> 10 puntos para Slytherin </p>`);
    } else {
      console.log("Solo se admiten las cualidades mencionadas: valentia, sabiduria, ambicion, honestidad");
    }
  };

  $("<p>¿Cuál es tu linaje? </p>").prependTo($("#padre3")).css({ "font-weight": "bolder", "font-size": "20px" });

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

  $("<p>  ¿Que reliquia eliges? </p>").prependTo($("#padre4")).css({ "font-weight": "bolder", "font-size": "20px" });

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

  // CALCULADORA DE PUNTAJES POR LAS OPCIONES ELEGIDAS

  this.saberCasa = function () {
    var resultadoFinal = Math.max(this.puntosG, this.puntosR, this.puntosH, this.puntosS);
    let congrats = $("#enviar").text("¡Felicidades! Perteneces a ").css({ "font-size": "70px", "font-weight": "bolder", "font-family": "Harry Potter", "letter-spacing": "7px" });

    switch (resultadoFinal) {
      case this.puntosG:
        congrats.append(`<p>Gryffindor </p>`).css({ color: "red" });
        Escudo.mostrarEscudo();
        break;
      case this.puntosR:
        congrats.append(`<p>Ravenclaw </p>`).css({ color: "blue" });
        Escudo.mostrarEscudo2();
        break;
      case this.puntosH:
        congrats.append(`<p>Hufflepuff </p>`).css({ color: "brown" });
        Escudo.mostrarEscudo3();
        break;
      case this.puntosS:
        congrats.append(`<p>Slytherin </p>`).css({ color: "green" });
        Escudo.mostrarEscudo4();
        break;
      default:
        alert("Lo siento, no hemos podido averiguarlo");
    }

    console.log(this.caracteristicas);
    alert("Has sumado: " + resultadoFinal + " puntos");
  };
}

// LLAMADA A TODOS LOS METODOS CON EL BOTON SABER CASA

let resultado = new CasaHogwarts();

$("#saber-casa").click(function () {
  resultado.preguntarVarita();
  resultado.preguntarPersona();
  resultado.preguntarLinaje();
  resultado.elijeReliquia();
  resultado.saberCasa();
  $("#look").fadeIn(5000);
});

// ESCUDOS AL SALIR SEGUN RESULTADO

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


// BOTON DE REPETIR EL TEST, RECARGA LA PAGINA

$("#repetir").click(function (e) {
  location.reload();
});

// BOTON IR HACIA ARRIBA

$(".arriba").click(function () {
  $("body, html").animate(
    {
      scrollTop: "0px",
    },
    300
  );
});
