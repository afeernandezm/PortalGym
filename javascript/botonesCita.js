// Obtener todos los botones de "Borrar cita"
const deleteButtons = document.querySelectorAll('.btn-danger');

// Agregar un evento de escucha de clic a cada botón de "Borrar cita"
deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtener la fila de la tabla que contiene el botón que se hizo clic
        const row = button.closest('tr');

        // Eliminar la fila de la tabla
        row.remove();
    });
});



// Obtener todos los botones de "Modificar cita"
const editButtons = document.querySelectorAll('.btn-warning');

// Agregar un evento de escucha de clic a cada botón de "Modificar cita"
editButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtener la fila de la tabla que contiene el botón que se hizo clic
        const row = button.closest('tr');

        // Obtener los datos de la cita de la fila de la tabla
        const gym = row.querySelector('td:nth-child(1)').textContent;
        const fecha = row.querySelector('td:nth-child(2)').textContent;
        const hora = row.querySelector('td:nth-child(3)').textContent;

        // Pedir al usuario que ingrese los nuevos datos de la cita
        const nuevoGym = prompt('Ingrese el nuevo nombre del GYM:', gym);
        const nuevaFecha = prompt('Ingrese la nueva fecha de la cita (dd/mm/aaaa):', fecha);
        const nuevaHora = prompt('Ingrese la nueva hora elegida (hh:mm):', hora);

        // Actualizar la fila de la tabla con los nuevos datos de la cita
        row.querySelector('td:nth-child(1)').textContent = nuevoGym;
        row.querySelector('td:nth-child(2)').textContent = nuevaFecha;
        row.querySelector('td:nth-child(3)').textContent = nuevaHora;
    });
});