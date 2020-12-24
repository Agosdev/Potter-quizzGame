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
