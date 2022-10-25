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
  completed();
  let lesson_status1 = scorm.get("cmi.core.lesson_status");
  $("#statusTerminate1").text(lesson_status1);
  lesson_status1 == "completed" ? $("#statusTerminate1").addClass("trueColor") : $("#statusTerminate1").removeClass("trueColor");
  console.log("%c Status " + lesson_status1, "font-size: 100%; color: #ff7e29; font-weight: 700;");
});

$("#btnTerminate2").click(function () {
  passed();
  let lesson_status2 = scorm.get("cmi.core.lesson_status");
  $("#statusTerminate2").text(lesson_status2);
  lesson_status2 == "passed" ? $("#statusTerminate2").addClass("trueColor") : $("#statusTerminate2").removeClass("trueColor");
  console.log("%c Status " + lesson_status2, "font-size: 100%; color: #ff7e29; font-weight: 700;");
});

$("#btnTerminate3").click(function () {
  completed2004();
  let lesson_status3 = scorm.get("cmi.completion_status");
  $("#statusTerminate3").text(lesson_status3);
  lesson_status3 == "passed" ? $("#statusTerminate3").addClass("trueColor") : $("#statusTerminate3").removeClass("trueColor");
  console.log("%c Status " + lesson_status3, "font-size: 100%; color: #ff7e29; font-weight: 700;");
});

$("#btnTerminate4").click(function () {
  passed2004();
  let lesson_status4 = scorm.get("cmi.success_status");
  $("#statusTerminate4").text(lesson_status4);
  lesson_status4 == "passed" ? $("#statusTerminate4").addClass("trueColor") : $("#statusTerminate4").removeClass("trueColor");
  console.log("%c Status " + lesson_status4, "font-size: 100%; color: #ff7e29; font-weight: 700;");
});
