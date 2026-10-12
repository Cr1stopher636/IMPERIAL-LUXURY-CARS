// const net = require('node:net');

// function fineavaliblePort(desirePort) {
//     return new Promise((resolve, reject) => {
//         const server = net.createServer()

//         server.listen(desirePort, () => {
//             const { port } = server.address()
//             server.close(() => {
//                 resolve(port)
//             })
//         })
//         server.on('error', (err) => {
//             if (err.code === 'EADDRINUSE') {
//                 fineavaliblePort(desirePort + 1).then(port => resolve(port))

//             } else {
//                 reject(err)
//             }
//         })
//     })
// }

// module.exports = { fineavaliblePort }