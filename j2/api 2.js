app.post('localhost:3000', (req, res) => {
  // Imprime en la consola de la terminal los datos recibidos
  console.log('Datos recibidos en el backend:', req.body);

  // Responde al cliente para confirmar recepción
  res.json({ status: 'ok', dataReceived: req.body });
});