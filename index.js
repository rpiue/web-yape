const express = require('express');
const path = require('path'); // Módulo para trabajar con rutas
const app = express();

// Definir el puerto a través de una variable de entorno o usar 3000 como valor predeterminado
const port = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
