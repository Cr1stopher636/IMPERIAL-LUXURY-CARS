// const http = require('node:http');
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Permite solicitudes desde ese origen específico
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); //Indica que métodos HTTP están permitidos
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Indica que cabeceras puede enviar el frontend en la petición

//     // Manejo de peticiones Preflight de CORS (método OPTIONS)
//     if (req.method === 'OPTIONS') {
//         res.writeHead(204);
//         return res.end();
//     }


//     if (req.url === '/') {
//         console.log('Solicitud aceptada✅');
//         res.setHeader('Content-Type', 'application/json; charset=utf-8')
//         const persona = { nombre: 'Ricardo', edad: 23, ciudad: 'CDMX' }
//         res.end(JSON.stringify(persona));

//     } else if (req.url === '/login') {
//         console.log('Solicitud aceptada de la página login✅');
//         res.setHeader('Content-Type', 'application/json; charset=utf-8')
//         const segundoObjeto = { nombre: 'Andrea', edad: 23, ciudad: 'CDMX' }
//         res.end(JSON.stringify(segundoObjeto));
//     }
// });

// server.listen(port, () => {
//     console.log(`Servidor escuchando en el puerto: ${port}`);
// })