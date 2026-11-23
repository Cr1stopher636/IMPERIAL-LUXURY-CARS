// const http = require('node:http')
// const desirePort = process.env.PORT ?? 3000;
// // const { fineavaliblePort } = require('./freePort')

// const processRequest = (req, res) => {
//     console.log('Solicitud recibida✅');
//     if (req.url === '/') {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json; charset=utf-8')
//         const miObjeto = { id: 1, pagina: 'Página principal' }
//         res.end(JSON.stringify(miObjeto));

//     } else if (req.url === '/modelos') {
//         res.statusCode = 200
//         res.setHeader('Content-Type', 'application/json; charset=utf-8')
//         res.end(JSON.stringify(({ id: 2, pagina: 'Pagina de modelos' })));

//     } else if (req.url === '/contacto') {
//         res.statusCode = 200
//         res.setHeader('Content-Type', 'application/json; charset=utf-8')
//         res.end(JSON.stringify(({ id: 3, pagina: 'Pagina de contacto' })));

//     } else {
//         res.statusCode = 404;
//         res.setHeader('Content-Type', 'application/json; charset=utf-8')
//         res.end(JSON.stringify('404-No se encontro el archivo'));
//     }
// }



// const server = http.createServer(processRequest)

// server.listen(desirePort, () => {
//     console.log(`Servidor escuchando en ${desirePort}`);
// })

// module.exports = { desirePort };

// // const processRequest = ((req, res) => {
// //     console.log('Solicitud aceptada✅', req.url);
// //     res.end('Hola papiRick')
// // })

// // const server = http.createServer(processRequest)

// // fineavaliblePort(desirePort).then(port => {
// //     server.listen(port, () => {
// //         console.log(`Servidor escuchando en http://localhost${port}`);
// //     })
// // })



// // setTimeout(() => {
// //     console.log('Han pasado 2 segundos !');
// // }, 2000);



