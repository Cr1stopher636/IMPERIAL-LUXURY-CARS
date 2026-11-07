// CONSUMIENDO UNA API con .then y catch

fetch("http://localhost:3000/login")
.then(res => res.json())
.then(items => {
    console.log(items)
})

.catch(err => {
    console.error('Error al consumir la API');
})




// .then(respuesta => {
//     if (!respuesta.ok) throw new Error("Error en la respuesta del servidor");
//     return respuesta.json();
// })



// CONSUMIENDO APIS CON ASYNC AWAIT

// async function info() {
//     const request = await fetch('http://localhost:3000/contacto')
//     const files = await request.json()
//     console.log(files);
// }

// info();










