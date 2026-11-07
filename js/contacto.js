const express = require('express');
const app = express();

// 1. Middleware indispensable para leer los datos del formulario (urlencoded)
app.use(express.urlencoded({ extended: true }));

app.use(express.json()); // Middleware para parsear JSON si es necesario

// (Opcional) Si también quieres servir tus archivos estáticos (HTML, CSS, JS) desde una carpeta 'public'
// app.use(express.static('public'));

// 2. Ruta que procesará el formulario (debe coincidir con el action="")
app.post('/formulario-contacto', (req, res) => {
    // req.body contiene los datos enviados mapeados por el atributo "name" de los inputs
    const { nombre, apellido, correo, telefono, mensaje } = req.body;

    console.log('Datos recibidos del formulario:');
    console.log(`Nombre: ${nombre}`);
    console.log(`Apellido: ${apellido}`);
    console.log(`Correo: ${correo}`);
    console.log(`Teléfono: ${telefono}`);
    console.log(`Mensaje: ${mensaje}`);

    // Aquí puedes guardar los datos en una base de datos, enviar un correo, etc.

    // Responder al usuario (puedes redirigirlo o enviarle un mensaje)
    res.json({ mensaje: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.' });
});


app.listen(4000, () => {
    console.log('http://localhost:4000');
});