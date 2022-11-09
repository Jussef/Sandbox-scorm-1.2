// Inicio de la app
app = () => {
  scorm.connection.isActive == true ? $("#userLMS").text("Bienvenid@ " + scorm.get("cmi.core.student_name")) : $("#userLMS").text("Bienvenid@");

  ////  Obtener susped_data  ////
  actualizaDatos = () => {
    const datos = leerDatos();
    const valLocationLMS = scorm.get("cmi.core.lesson_location");
    const valRawLMS = scorm.get("cmi.core.score.raw");
    const lesson_status1 = scorm.get("cmi.core.lesson_status");
    const lesson_status2 = scorm.get("cmi.core.lesson_status");
    const lesson_status3 = scorm.get("cmi.completion_status");
    const lesson_status4 = scorm.get("cmi.success_status");

    $("#statusLocation").text(valLocationLMS);
    valLocationLMS > 0 ? $("#statusLocation").addClass("trueColor") : $("#statusLocation").removeClass("trueColor");

    $("#statusRaw").text(valRawLMS);
    valRawLMS > 0 ? $("#statusRaw").addClass("trueColor") : $("#statusRaw").removeClass("trueColor");

    if (lesson_status1 == "completed") {
      $("#statusTerminate1").text(lesson_status1);
      $("#statusTerminate1").addClass("trueColor");
    } else {
      $("#statusTerminate1").text("false");
      $("#statusTerminate1").removeClass("trueColor");
    }

    if (lesson_status2 == "passed") {
      $("#statusTerminate2").text(lesson_status2);
      $("#statusTerminate2").addClass("trueColor");
    } else {
      $("#statusTerminate2").text("false");
      $("#statusTerminate2").removeClass("trueColor");
    }

    if (lesson_status3 == "completed") {
      $("#statusTerminate3").text(lesson_status3);
      $("#statusTerminate3").addClass("trueColor");
    } else {
      $("#statusTerminate3").text("false");
      $("#statusTerminate3").removeClass("trueColor");
    }

    if (lesson_status4 == "passed") {
      $("#statusTerminate4").text(lesson_status4);
      $("#statusTerminate4").addClass("trueColor");
    } else {
      $("#statusTerminate4").text("false");
      $("#statusTerminate4").removeClass("trueColor");
    }

    if (datos == "" || datos == " " || datos == null || datos == undefined) {
      $("#statusData").text("null");
      $("#statusData").removeClass("trueColor");
      countChars("");
    } else {
      $("#statusData").addClass("trueColor");
      $("#statusData").text(datos);
      countChars(datos);
    }
  };
  // actualizaDatos();

  ////  Alerts  ////
  const alertPlaceholder = document.getElementById("alertArea");
  let alertActive = false;
  const alertColor = (message, type) => {
    if (alertActive == false) {
      alertActive = true;
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [`<div class="alert alert-${type} alert-dismissible" role="alert"><div>${message}</div><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`];
      alertPlaceholder.append(wrapper);
      setTimeout(() => {
        $(".alert").css("display", "none");
        alertActive = false;
      }, 5000);
    }
  };

  //// Contador de caracteres suspend_data ////
  function countChars(obj) {
    var maxLength = 4096;
    var strLength = obj.length;
    var charRemain = maxLength - strLength;

    if (charRemain < maxLength) {
      $("#statusCaracteres").text(strLength);
    } else {
      $("#statusCaracteres").text("0");
    }
  }

  //// Area de botones ////

  $("#btnData").click(function () {
    const datos = leerDatos();
    if (datos == "" || datos == " " || datos == null || datos == undefined) {
      $("#statusData").text("null");
      $("#statusData").removeClass("trueColor");
      countChars("");
    } else {
      $("#statusData").addClass("trueColor");
      $("#statusData").text(datos);
      countChars(datos);
    }
  });

  $("#btnLimpiaData").click(function () {
    localStorage.clear();
    send("");
    cadena = "";
    infoPagina = "";
    infoPuntaje = "";
    tarjetas = "";
    $("#statusData").text("false");
    $("#statusData").removeClass("trueColor");
    countChars("");
  });

  $("#btnLocation").click(function () {
    let valLocation = $("#selectLocation").val();
    scorm.set("cmi.core.lesson_location", valLocation);
    guardaSuspendData("pagina", valLocation);
    actualizaDatos();
  });

  $("#btnRaw").click(function () {
    let valRaw = $("#selectRaw").val();
    scorm.set("cmi.core.score.raw", valRaw);
    guardaSuspendData("puntaje", valRaw);
    actualizaDatos();
  });

  $("#btnTerminate1").click(function () {
    completed();
    $("#btnTerminate2, #btnTerminate3, #btnTerminate4").attr("disabled", "true");
    guardaSuspendData("metodo", "Scorm 1.2/Complete");
    alertColor("Seleccionaste SCORM 1.2 Metodo: completed", "primary");
    actualizaDatos();
  });

  $("#btnTerminate2").click(function () {
    passed();
    $("#btnTerminate1, #btnTerminate3, #btnTerminate4").attr("disabled", "true");
    guardaSuspendData("metodo", "Scorm 1.2/Passed");
    alertColor("Seleccionaste SCORM 1.2 Metodo: passed", "primary");
    actualizaDatos();
  });

  $("#btnTerminate3").click(function () {
    completed2004();
    $("#btnTerminate1, #btnTerminate2, #btnTerminate4").attr("disabled", "true");
    guardaSuspendData("metodo", "Scorm 2004/Complete");
    alertColor("Seleccionaste 2004 Metodo: Complete", "primary");
    actualizaDatos();
  });

  $("#btnTerminate4").click(function () {
    passed2004();
    $("#btnTerminate1, #btnTerminate2, #btnTerminate3").attr("disabled", "true");
    guardaSuspendData("metodo", "Scorm 2004/Passed");
    alertColor("Seleccionaste 2004 Metodo: Passed", "primary");
    actualizaDatos();
  });
};
