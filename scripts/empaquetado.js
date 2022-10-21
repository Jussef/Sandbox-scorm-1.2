const zipFolder = require("zip-a-folder");
const nombreRepo = "SandboxScormBySPIRA_";

const months = [
  "ENE",
  "FEB",
  "MAR",
  "ABR",
  "MAY",
  "JUN",
  "JUL",
  "AGO",
  "SEP",
  "OCT",
  "NOV",
  "DIC"
];
let current_datetime = new Date();
let formatted_date =
  current_datetime.getDate() +
  "-" +
  months[current_datetime.getMonth()] +
  "-" +
  current_datetime.getFullYear() +
  "_" +
  current_datetime.getHours() +
  current_datetime.getMinutes() +
  current_datetime.getSeconds();

class ZipAFolder {
  static main() {
    console.log("Empaquetando . . .");
    console.log(nombreRepo + formatted_date);
    zipFolder.zipFolder("./Curso", nombreRepo + formatted_date + ".zip", function(
      err
    ) {
      if (err) {
        console.log("Sorry! ", err);
      }
    });
  }
}

ZipAFolder.main();