const añadirEjercicioEspaldaBiceps = document.getElementById("añadirEjercicioEspaldaBiceps");
const tablaEspaldaBiceps = document.getElementById("tablaEspaldaBiceps").getElementsByTagName("tbody")[0];

// Agregar un evento al botón de crear rutina
añadirEjercicioEspaldaBiceps.addEventListener("click", function () {
    // Crear un modal de bootstrap para pedir los datos del nuevo ejercicio
    const modal = new bootstrap.Modal(document.getElementById("modalNuevoEjercicio"), { keyboard: false });

    // Obtener los elementos del modal
    const ejercicioInput = document.getElementById("ejercicioInput");
    const seriesInput = document.getElementById("seriesInput");
    const repeticionesInput = document.getElementById("repeticionesInput");
    const agregarBtn = document.getElementById("agregarBtn");

    // Agregar un evento al botón de agregar ejercicio
    agregarBtn.addEventListener("click", function () {
        // Crear una nueva fila en la tabla de ejercicios con los datos introducidos por el usuario
        const nuevaFila = tablaEspaldaBiceps.insertRow(-1);
        const celdaEjercicio = nuevaFila.insertCell(0);
        const celdaSeries = nuevaFila.insertCell(1);
        const celdaRepeticiones = nuevaFila.insertCell(2);
        const celdaAcciones = nuevaFila.insertCell(3);
        celdaEjercicio.innerHTML = ejercicioInput.value;
        celdaSeries.innerHTML = seriesInput.value;
        celdaRepeticiones.innerHTML = repeticionesInput.value;
        celdaAcciones.innerHTML = `
      <button type="button" class="btn btn-warning">Modificar ejercicio</button>
      <button type="button" class="btn btn-danger">Borrar ejercicio</button>
    `;

        // Limpiar los inputs del modal
        ejercicioInput.value = "";
        seriesInput.value = "";
        repeticionesInput.value = "";

        // Cerrar el modal
        modal.hide();
    });

    // Mostrar el modal
    modal.show();
});