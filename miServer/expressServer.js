import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename, 'IMPERIAL-LUXURY-CARS');


const app = express();
const PORT = 3000;

// ==========================================
// MIDDLEWARES (¡Obligatorios!)
app.use(express.urlencoded({ extended: true })); // <-- Este lee los datos del formulario HTML
app.use(express.json());    
app.use(express.static('..'));// Este lee JSON (para Postman o fetch)


// ==========================================
// RUTA DEL FORMULARIO
// ==========================================


app.post('/formulario-login', (req, res) => {
    const { username, password } = req.body;

    console.log('Usuario:', username);
    console.log('Contraseña:', password);

    res.sendFile(path.join(__dirname, '..', '01-index.html'));
});

app.post('/formulario-contacto', (req, res) => {
    // Como ya cambiamos los "name" en el HTML, esto coincidirá perfectamente
    const { nombre, apellido, correo, telefono, mensaje } = req.body;
    console.log('\n');

    console.log('Datos recibidos del formulario contacto:'); 
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Correo electrónico:', correo);
    console.log('Teléfono:', telefono);
    console.log('Mensaje:', mensaje);
    
    // console.log('Datos recibidos del HTML:', req.body);
    res.sendFile(path.join(__dirname, '..', '04-bandejaContacto.html'));
});

app.post('/form-configurator', (req, res) => {
    const { modelo, exterior, interior, extras } = req.body;

    console.log('\n');
     console.log('Datos recibidos del configurador:'); 
    console.log('Modelo:', modelo);
    console.log('Exterior:', exterior);
    console.log('Interior:', interior);
    console.log('Extras:', extras);

    res.sendFile(path.join(__dirname, '..', '04-bandejaContacto.html'));
     // Redirige a la página de agradecimiento
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});