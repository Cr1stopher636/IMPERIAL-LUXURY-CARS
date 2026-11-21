// Leyendo archivos con el modulo de node.js
// import fs from 'node:fs';
// import fs from 'node:fs/promises';
// import path from 'node:path';


// Promesas
// const miPromise = new Promise((resolve, reject) => {
//     const exito = null;

//     if (exito) {
//         resolve('salio bien la promesa')
//     } else {
//         reject(new Error'salio mal la promesa');
//     }
// });


//Promesas con asyn/await
// async function init() {
//     const fileRead = await fs.readFile('expressServer.js', 'utf-8');
//     console.log(`Estes el contenido del archivo: \n \n ${fileRead}`);
// }

// init();




// miPromise
// .then(mensaje => {
//     console.log(mensaje)
// })

// .catch(error => {
//     console.error(error);
// });





// console.log(path.dirname('archivo32.txt')); //Devuelve el nombre del directorio padre de una ruta excluyendo el último segmento y las barras finales
// console.log(path.extname('archivo32.txt')); //Devuelve la extensión de la ruta desde la ultima aparcición del caracter 




// Asincrona con async/await
// async function example() {
//     const data = await fs.readFile('expressServer.js', 'utf-8')
//     console.log(data);
// }

// example();



// Asincrona con callbacks
// fs.readFile('expressServer.js', 'utf-8', (text, err) => {
//     if (text) {
//          console.log(text)
//     } else {
//         console.error(err)
//     }
// })

// Sincrona
// const data = fs.readFileSync('expressServer.js', 'utf8');
// console.log('Estos son los datos 👍🏻', '\n', data);


