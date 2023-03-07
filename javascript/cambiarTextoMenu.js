document.getElementById("botonIS").addEventListener("click", function() {
    var nombre = document.getElementById("nombre").value;
    document.getElementById("enlaceInicioSesion").innerHTML = nombre;
});