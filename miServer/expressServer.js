import express from 'express';

const app = express();
const PORT = 3000;

// ==========================================
// MIDDLEWARES (¡Obligatorios!)
// ==========================================
app.use(express.urlencoded({ extended: true })); // <-- Este lee los datos del formulario HTML
app.use(express.json());    
app.use(express.static('IMPERIAL-LUXURY-CARS'));                     // Este lee JSON (para Postman o fetch)

// ==========================================
// RUTA DEL FORMULARIO
// ==========================================
// app.post('/formulario-contacto', (req, res) => {
//     // Como ya cambiamos los "name" en el HTML, esto coincidirá perfectamente
//     const { nombre, apellido, correo, telefono, mensaje } = req.body;
//     console.log('\n');

//     console.log('Datos recibidos del HTML:'); 
//     console.log('Nombre:', nombre);
//     console.log('Apellido:', apellido);
//     console.log('Correo electrónico:', correo);
//     console.log('Teléfono:', telefono);
//     console.log('Mensaje:', mensaje);
    
//     // console.log('Datos recibidos del HTML:', req.body);
//     res.send('¡Formulario recibido! Gracias por contactarnos.');
// });

app.post('/form-configurator', (req, res) => {
    const { modelo, exterior, interior, extras } = req.body;

    console.log('\n');

    console.log('Modelo:', modelo);
    console.log('Exterior:', exterior);
    console.log('Interior:', interior);
    console.log('Extras:', extras);

 
    res.redirect(303, '/form-configurator'); // Redirige a la página de agradecimiento
});

app.get('/form-configurator', (req, res) => {
    res.sendFile('/IMPERIAL-LUXURY-CARS/05-configurador.html');
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});