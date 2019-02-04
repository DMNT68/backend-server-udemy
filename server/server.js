// Requires (importacion de librerias propias o de terceros que utilizamos para que funcione algo)
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// incializar variables
const app = express();

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Ruta Global
app.use(require('./routes/index'));

// Conexión a la BDD
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', ' online');
});

// Escuchar
app.listen(3000, () => console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', ' online'));