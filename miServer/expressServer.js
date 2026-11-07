import express from 'express';

const app = express();
const PORT = 3000;

// ==========================================
// MIDDLEWARES (¡Obligatorios!)
// ==========================================
app.use(express.urlencoded({ extended: true })); // <-- Este lee los datos del formulario HTML
app.use(express.json());    
app.use(express.static('.'));                     // Este lee JSON (para Postman o fetch)

// ==========================================
// RUTA DEL FORMULARIO
// ==========================================
app.post('/formulario-contacto', (req, res) => {
    // Como ya cambiamos los "name" en el HTML, esto coincidirá perfectamente
    // const { nombre, apellido, correo, telefono, mensaje } = req.body;

    // console.log('Datos recibidos del HTML:'); 
    // console.log('Nombre:', nombre);
    // console.log('Apellido:', apellido);
    // console.log('Correo electrónico:', correo);
    // console.log('Teléfono:', telefono);
    // console.log('Mensaje:', mensaje);

    console.log('Datos recibidos del HTML:', req.body);
    res.send('¡Formulario recibido! Gracias por contactarnos.');
    res.redirect('/04-bandejaContacto.html'); // Redirige a la página de contacto después de enviar el formulario

});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});