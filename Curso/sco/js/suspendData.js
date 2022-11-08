// 🎮 Gamificacion //

let infoPagina = "";
let infoPuntaje = "";
let infoMetodo = "";

function guardaSuspendData(tipo, valor) {
  leerSuspendData();
  if (valor == undefined || valor == "" || valor == " " || valor == null) {
    switch (tipo) {
      case "pagina":
        valor = 0;
        break;
      case "puntaje":
        valor = 0;
        break;
      case "metodo":
        valor = 0;
        break;
    }
  } else {
    switch (tipo) {
      case "pagina":
        send("[Pagina," + valor + "][Puntaje," + infoPuntaje + "][Metodo," + infoMetodo + "]");
        break;

      case "puntaje":
        send("[Pagina," + infoPagina + "][Puntaje," + valor + "][Metodo," + infoMetodo + "]");
        break;

      case "metodo":
        send("[Pagina," + infoPagina + "][Puntaje," + infoPuntaje + "][Metodo," + valor + "]");
        break;
    }
  }
}

// Función que lee la información almacenada en suspend_data y actualiza las props correspondientes
function leerSuspendData() {
  var suspendData = leerDatos();
  console.log("SUSPENDATA: ", suspendData);

  if (suspendData == null || suspendData == "" || suspendData == undefined || suspendData == " ") {
    infoPagina = 0;
    infoPuntaje = 0;
    infoMetodo = 0;
  } else {
    var informacionSeparada = suspendData.split("]");

    var temporal = informacionSeparada[0].split("[");
    temporal = informacionSeparada[0].split("Pagina,");
    infoPagina = temporal[1];
    console.log("infoPagina", infoPagina);

    temporal = informacionSeparada[1].split("[");
    temporal = informacionSeparada[1].split("Puntaje,");
    infoPuntaje = temporal[1];
    console.log("infoPUntaje", infoPuntaje);

    temporal = informacionSeparada[2].split("[");
    temporal = informacionSeparada[2].split("Metodo,");
    infoMetodo = temporal[1];
    console.log("infoMeotod", infoMetodo);
  }
  return suspendData;
}
