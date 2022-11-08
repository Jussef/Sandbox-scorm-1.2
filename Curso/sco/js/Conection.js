var scorm = pipwerks.SCORM;

function init() {
  scorm.version = "1.2";
  scorm.init();
  if (scorm.connection.isActive == true) {
    console.log("%c Status " + scorm.connection.isActive, "font-size: 100%; color: #00ff22; font-weight: 700;");
    app();
  } else {
    console.log("%c Status " + scorm.connection.isActive, "font-size: 100%; color: #ff001e; font-weight: 700;");
    app();
  }
}

function set(param, value) {
  scorm.set(param, value);
  console.log("%c SCORM: set " + param + " " + value, "font-size: 100%; color: #00AEFF; font-weight: 700;");
  // console.log("Version ------->",scorm.get("cmi._version"));
  // console.log("Location ------->", scorm.get("cmi.core.lesson_location"));
  // console.log("Nomebre ------->", scorm.get("cmi.core.student_name"));
  // console.log("Status ------->", scorm.get("cmi.core.lesson_status"));
  // console.log("Raw → ", scorm.get("cmi.core.score.raw"));
  save();
}

function send(value) {
  set("cmi.suspend_data", value);
  save();
}

function leerDatos() {
  const suspendData = scorm.get("cmi.suspend_data");
  return suspendData;
}

// function send(value) {
//   localStorage.setItem("data", value);
// }

// function leerDatos() {
//   const suspendData = localStorage.getItem("data");
//   return suspendData;
// }

function get(param) {
  return scorm.get(param);
}

function complete() {
  scorm.set("cmi.core.lesson_status", "completed");
  save();
}

// Distintos complete
function completed() {
  scorm.set("cmi.core.lesson_status", "completed");
  save();
}
function passed() {
  scorm.set("cmi.core.lesson_status", "passed");
  save();
}
// SCORM 2004 2nd Edition
function completed2004() {
  scorm.set("cmi.completion_status", "completed");
  save();
}
function passed2004() {
  scorm.set("cmi.success_status", "passed");
  save();
}

function incomplete() {
  scorm.set("cmi.core.lesson_status", "incomplete");
  save();
}

function save() {
  scorm.save();
}

function end() {
  scorm.quit();
  save();
}

window.onload = function () {
  init();
};

window.onunload = function () {
  if (conection) {
    end();
  }
};
