// Leyendo archivos con el modulo de node.js
// import fs from 'node:fs';
// import fs from 'node:fs/promises';
import path from 'node:path';

console.log(path.dirname('/miServer')); //Devuelve el nombre del directorio padre de una ruta excluyendo el último segmento y las barras finales




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


