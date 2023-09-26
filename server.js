const express = require('express');
const app = express();
const port = 3000;

// Ruta por defecto
app.get('/', (req, res) => {
  res.send('Bienvenido a mi primer servidor');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
