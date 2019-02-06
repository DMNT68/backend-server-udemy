// Requires (importacion de librerias propias o de terceros que utilizamos para que funcione algo)
const express = require('express');

// incializar variables
const app = express();

app.use(require('./login'));
app.use(require('./usuario'));
app.use(require('./hospital'));
app.use(require('./medico'));
app.use(require('./busqueda'));
app.use(require('./upload'));
app.use(require('./imagenes'));

module.exports = app;