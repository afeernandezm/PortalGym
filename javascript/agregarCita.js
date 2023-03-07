function agregarCita() {
    // Obtener los valores del formulario
    var gimnasio = document.getElementById("gimnasio").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;

    // Mostrar un mensaje de confirmación
    var mensaje = "¿Está seguro que desea agregar una nueva cita?";
    if (confirm(mensaje)) {
        // Crear la nueva fila de la tabla
        var tabla = document.getElementById("tablaCitas");
        var nuevaFila = tabla.insertRow(-1);
        var celdaGimnasio = nuevaFila.insertCell(0);
        var celdaFecha = nuevaFila.insertCell(1);
        var celdaHora = nuevaFila.insertCell(2);
        var celdaAcciones = nuevaFila.insertCell(3);
        celdaGimnasio.innerHTML = gimnasio;
        celdaFecha.innerHTML = fecha;
        celdaHora.innerHTML = hora;
        celdaAcciones.innerHTML =
            '<button type="button" class="btn btn-warning" class="gestionCita">Modificar cita</button> <button type="button" class="btn btn-danger" class="gestionCita">Borrar cita</button>';

        // Limpiar el formulario
        document.getElementById("fecha").value = "";
        document.getElementById("hora").value = "";
        document.getElementById("gimnasio").value = "";

        // Cerrar el modal
        $("#citaModal").modal("hide");
    }
}