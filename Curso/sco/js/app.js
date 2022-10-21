$("#btnInit").click(function () {
  init();
  $("#statusInit").text(scorm.connection.isActive);
  scorm.connection.isActive == true ? $("#statusInit").addClass("trueColor") : $("#statusInit").removeClass("trueColor");
  console.log("%c Status " + scorm.connection.isActive, "font-size: 100%; color: #ff7e29; font-weight: 700;");
});

$("#btnLocation").click(function () {
  $("formLocation").submit();
  $("#statusInit").text(scorm.connection.isActive);
  scorm.connection.isActive == true ? $("#statusInit").addClass("trueColor") : $("#statusInit").removeClass("trueColor");
  console.log("%c Status " + scorm.connection.isActive, "font-size: 100%; color: #ff7e29; font-weight: 700;");
});

function visto(valor) {
  set("cmi.core.lesson_location", valor);
  if (valor === 1) {
    let video1 = document.getElementById("video1");
    video1.remove();
  }
  if (valor === 3) {
    let audio1 = document.getElementById("audio1");
    audio1.remove();
  }
  if (valor === 7) {
    complete();
    end();
  }
}

function status() {
  if (contador === 3) {
    document.getElementById("btn7").disabled = false;
  }
}
