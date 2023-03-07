
const deleteButtons = document.querySelectorAll('.btn-danger');

deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const row = button.closest('tr');
        row.remove();
    });
});

const editButtons = document.querySelectorAll('.btn-warning');

editButtons.forEach(button => {
    button.addEventListener('click', () => {

        const row = button.closest('tr');


        const ejercicio = row.querySelector('td:nth-child(1)').textContent;
        const serie = row.querySelector('td:nth-child(2)').textContent;
        const repeticion = row.querySelector('td:nth-child(3)').textContent;


        const nuevoEjercicio = prompt('Ingrese el nuevo nombre del ejercicio:', ejercicio);
        const nuevaSerie = prompt('Ingrese las nuevas series :', serie);
        const nuevaRepeticion = prompt('Ingrese el nuevo número de repeticiones:', repeticion);

        row.querySelector('td:nth-child(1)').textContent = nuevoEjercicio;
        row.querySelector('td:nth-child(2)').textContent = nuevaSerie;
        row.querySelector('td:nth-child(3)').textContent = nuevaRepeticion;
    });
});

//------------------------------------------------------
// Obtener el botón de crear rutina y la tabla de ejercicios
const crearRutinaBtn = document.getElementById("crearRutinaBtn");
const tablaEjercicios = document.getElementById("tablaRutinas").getElementsByTagName("tbody")[0];

// Agregar un evento al botón de crear rutina
crearRutinaBtn.addEventListener("click", function () {
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
        const nuevaFila = tablaEjercicios.insertRow(-1);
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




