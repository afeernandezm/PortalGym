const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;

    const body = `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje:\n${message}`;

    window.location.href = `mailto:antoniofernandezmarin3@gmail.com?subject=Nuevo mensaje de contacto desde tu sitio web&body=${encodeURIComponent(body)}`;
});
