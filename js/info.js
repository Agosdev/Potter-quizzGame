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
      url: "https://hp-api.herokuapp.com/api/characters/house/gryffindor",
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