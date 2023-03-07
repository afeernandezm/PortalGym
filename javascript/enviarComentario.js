const formulario = document.querySelector('form');
const comentarios = document.querySelector('#totalComentarios');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const correo = document.querySelector('#correo').value;
    const comentario = document.querySelector('#comentario').value;

    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('comentario');

    const comentarioNombre = document.createElement('h5');
    comentarioNombre.textContent = nombre;

    const comentarioCorreo = document.createElement('p');
    comentarioCorreo.textContent = correo;

    const comentarioTexto = document.createElement('p');
    comentarioTexto.textContent = comentario;

    nuevoComentario.appendChild(comentarioNombre);
    nuevoComentario.appendChild(comentarioCorreo);
    nuevoComentario.appendChild(comentarioTexto);

    const hr = document.createElement('hr');
    nuevoComentario.appendChild(hr);

    comentarios.appendChild(nuevoComentario);

    formulario.reset();
});