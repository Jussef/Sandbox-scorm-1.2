var API = {
    LMSInitialize: function () {
      console.log('LMSInitialize called');
      return 'true'; // Simulamos que se inicializó correctamente
    },
    LMSFinish: function () {
      console.log('LMSFinish called');
      return 'true'; // Simulamos que el curso terminó correctamente
    },
    LMSGetValue: function (key) {
      console.log('LMSGetValue called with key:', key);
      // Devuelve algunos valores simulados
      if (key === 'cmi.core.student_name') {
        return 'Juan Pérez'; // Nombre del estudiante simulado
      }
      return '';
    },
    LMSSetValue: function (key, value) {
      console.log('LMSSetValue called with key:', key, 'and value:', value);
      return 'true'; // Simulamos que se guardó el valor
    },
    LMSCommit: function () {
      console.log('LMSCommit called');
      return 'true'; // Simulamos que los datos fueron guardados correctamente
    },
    LMSGetLastError: function () {
      return '0'; // No error
    },
    LMSGetErrorString: function (errorCode) {
      return 'No error'; // Mensaje de error simulado
    },
    LMSGetDiagnostic: function (errorCode) {
      return 'No diagnostic information'; // Información diagnóstica simulada
    }
  };
  
  // Asegúrate de que el curso encuentre la API simulada
  function getAPI() {
    return API;
  }
  