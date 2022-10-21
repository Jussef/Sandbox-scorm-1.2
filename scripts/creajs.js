fs = require("fs");
moment = require('moment');
moment.locale('es-mx');
var fechaCompleta = moment().format('LLLLA');
var fechaString = "var fechaLog = '" + fechaCompleta + "'\n //Esta es la fecha que viene de fecha.js \n" + "\n console.log('%c' + fechaLog, 'font-size: 100%; color: #00ff22; font-weight: 700;');";

fs.writeFile("./public/librerias/js/fecha.js", fechaString, function (err) {
  if (err) return console.log(err);
  console.log("Esta lista la fecha!");
});
