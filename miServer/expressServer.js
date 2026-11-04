const express = require("express");

const app = express();
const PORT = 3000;

// app.use(express.urlencoded({ extended: true}));

app.get("/formulario-contacto", (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send('Hola desde express');
});


app.get('/html', (req, res) => {
    res.send(`<!DOCTYPE>
        <html>
        <head>
            <title>Formulario de contacto</title>
        </head>
        <body>
            <h1>Bienvenido papiRick</h1>
           
        </body>
        </html>`);
})

app.post("/formulario", (req, res) => {
    console.log(req.body);

    res.send("Formulario recibido");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});