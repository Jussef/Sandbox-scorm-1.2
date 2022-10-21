$("#btnInit").click(function () {
  init();
  $("#statusInit").text(scorm.connection.isActive);
  scorm.connection.isActive == true ? $("#statusInit").addClass("trueColor") : $("#statusInit").removeClass("trueColor");
  scorm.connection.isActive == true ? $("#userLMS").text("Bienvenido " + scorm.get("cmi.core.student_name")) : "";
  console.log("%c Status " + scorm.connection.isActive, "font-size: 100%; color: #ff7e29; font-weight: 700;");
});

$("#btnLocation").click(function () {
  let valLocation = $("#selectLocation").val();
  scorm.set("cmi.core.lesson_location", valLocation);
  let valLocationLMS = scorm.get("cmi.core.lesson_location")
  $("#statusLocation").text(valLocationLMS);
  valLocationLMS > 0 ? $("#statusLocation").addClass("trueColor") : $("#statusLocation").removeClass("trueColor");
  console.log("%c Status " + valLocationLMS, "font-size: 100%; color: #ff7e29; font-weight: 700;");
});

$("#btnRaw").click(function () {
  let valRaw = $("#selectRaw").val();
  scorm.set("cmi.core.score.raw", valRaw);
  let valRawLMS = scorm.get("cmi.core.score.raw")
  $("#statusRaw").text(valRawLMS);
  valRawLMS > 0 ? $("#statusRaw").addClass("trueColor") : $("#statusRaw").removeClass("trueColor");
  console.log("%c Status " + valRawLMS, "font-size: 100%; color: #ff7e29; font-weight: 700;");
});

$("#btnTerminate1").click(function () {
  let valTerminate1 = $("#selectTerminate1").val();
  scorm.set("cmi.core.score.Terminate1", valTerminate1);
  let valTerminate1LMS = scorm.get("cmi.core.score.Terminate1")
  $("#statusTerminate1").text(valTerminate1LMS);
  valTerminate1LMS > 0 ? $("#statusTerminate1").addClass("trueColor") : $("#statusTerminate1").removeClass("trueColor");
  console.log("%c Status " + valTerminate1LMS, "font-size: 100%; color: #ff7e29; font-weight: 700;");
});

    // complete();
    // end();
