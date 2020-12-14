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
// prettier-ignore
// JSON CON CARACTERISTICAS DE CADA CASA

$("#casas").click(function () {
  gJSON = '{"Nombre": "Godric ", "Habilidades": "  Tienes habilidades como espadachín", "Animal.": "El simbolo de tu Casa es el León. ", "Personalidad": "La personalidad de los magos que pertenecen a Gryffindor es muy marcada. Se trata de personas valientes y osadas, incluso tanto que a veces les hace imprudentes. No obstante, todos aquellos de Gryffindor también son personas templadas, caballerosas, grandes amigos y transparentes." }';
  rJSON = '{"Nombre": "Rowena", "Habilidades": "  Tienes habilidades para la arquitectura mágica.", "Animal": "El simbolo de tu Casa es el Cuervo. ", "Personalidad": " Esta casa premia la sabiduría, el ingenio, el aprendizaje y el intelecto, así pues, todos sus integrantes tienen estas cualidades. Son estudiantes que tienden al talento, tienen ideas novedosas y originales, por ello no es raro encontrar entre los Ravenclaw a personalidades excéntricas, peculiares a inusuales."}';
  hJSON = '{"Nombre": "Helga", "Habilidades": "  Tienes habilidades en encantamientos de Cocina.", "Animal": "El simbolo de tu Casa es el Tejon. ", "Personalidad": "Las personas de la casa Hufflepuff destacan por ser leales, justas y solidarias. Se trata de personas buenas y trabajadoras, que buscan la integración social y son simpáticos." }';
  sJSON = '{"Nombre": "Salazar", "Habilidades": "  Tienes habilidad extraordinaria para la Legeremancia.", "Animal": "El simbolo de tu Casa es la Serpiente. ", "Personalidad": "Sus integrantes suelen ser astutos y ambiciosos, persiguen lo que quieren sin importar los medios. Inteligentes, líderes natos, con un gran sentido de la supervivencia." }'; 

  var gObjeto = JSON.parse(gJSON);
  $("#info_potter").append("GRYFFINDOR:  ", gObjeto.Habilidades, gObjeto.Animal, gObjeto.Personalidad)
  var rObjeto = JSON.parse(rJSON);
  $("#info_potter").append("RAVENCLAW:  ", rObjeto.Habilidades, rObjeto.Animal, rObjeto.Personalidad)
  var hObjeto = JSON.parse(hJSON);
  $("#info_potter").append("HUFFLEPUFF:  ", hObjeto.Habilidades, hObjeto.Animal, hObjeto.Personalidad)
  var sObjeto = JSON.parse(sJSON);
  $("#info_potter").append("SLYTHERYN:  ", sObjeto.Habilidades, sObjeto.Animal, sObjeto.Personalidad)
});

// AJAX DE PERSONAJES DE GRYFFINDOR

$("#char").click(function () {
  $.ajax({
    url: "http://hp-api.herokuapp.com/api/characters/house/gryffindor",
    dataType: "json",
    type: "get",
    success: function (response) {
      let getJson = response;
      getJson.forEach(function (chars) {
        $("#lista-de-personajes")
          .append(
            `<div> <p> ${chars.name} , ${chars.species} , ${chars.gender} , Patronus: ${chars.patronus}, House: ${chars.house}, Birth: ${chars.dateOfBirth} </p> <img src="${chars.image}" width="200" height="300" class="alinea-fotos"/> </div>`
          )
          .css({ "text-align": "left", "font-size": "20px", "list-style": "none", margin: "23x" });
      });
    },
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

// BOTON DE REPETIR EL TEST, RECARGA LA PAGINA

$("#repetir").click(function (e) {
  location.reload();
});

// BOTON LUMUS, CAMBIA GIF

$("#light").hide();

$("#lumus").click(function () {
  $("#hat").hide();
  $("#light").fadeIn();
});

// CAMBIA IMAGEN POR GIF Y REEMPLAZA TEXTO

$("#treegif").hide();

$("#correcta").click(function () {
  $("#cambio_mje").replaceWith("<h2>¡Excelente!</h2>");
  $("#tree").hide();
  $("#treegif").show();
});

// MUSICA PARA ABRIR PUERTA, "ALOHOMORA"

$("#doorOpen").hide();

$("#notaFinal").click(function () {
  $("#door").hide();
  $("#doorOpen").show();
});

let context = new AudioContext();

function notam(sonido) {
  var o = context.createOscillator();
  g = context.createGain();
  o.connect(g);
  o.type = "sawtooth";
  o.frequency.value = sonido;
  g.connect(context.destination);
  o.start(0);
  g.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 1.1);
}

// FUNCION DETECTA PATRONUS CON MATH RANDOM DE UN ARRAY

$("#stag").hide();
$("#horse").hide();
$("#cat").hide();
$("#squirrel").hide();

var patronus = ["ciervo", "caballo", "gato", "ardilla"];

function descubrePatronus() {
  tuPatronus = patronus[Math.floor(Math.random() * patronus.length)];

  switch (tuPatronus) {
    case "ciervo":
      $("#stag").fadeIn().delay(5000).fadeOut(1000);
      $("#discover").replaceWith("<h2>Tu patronus es un ciervo</h2>");
      break;
    case "caballo":
      $("#horse").fadeIn().delay(5000).fadeOut(1000);
      $("#discover").replaceWith("<h2>Tu patronus es un caballo</h2>");
      break;
    case "gato":
      $("#cat").fadeIn().delay(5000).fadeOut(1000);
      $("#discover").replaceWith("<h2>Tu patronus es un gato</h2>");
      break;
    case "ardilla":
      $("#squirrel").fadeIn().delay(5000).fadeOut(1000);
      $("#discover").replaceWith("<h2>Tu patronus es una ardilla</h2>");
      break;
  }
}
// EFECTO DE ESCRITURA, MENSAJE DE ALBUS D.

var i = 0;
var texto =
  "Son nuestras elecciones las que muestran lo que somos, mucho más que nuestras habilidades. Las palabras son, en mi no tan humilde opinión, nuestra más inagotable fuente de magia, capaces tanto de infringir daño como de remediarlo...";
var speed = 50;

function typeWriter() {
  if (i < texto.length) {
    document.getElementById("type").innerHTML += texto.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// BOTON IR HACIA ARRIBA

$(".arriba").click(function () {
  $("body, html").animate(
    {
      scrollTop: "0px",
    },
    300
  );
});
