var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views','./app/views');

consign()
    .include('app/routes')
    //SE SETAR SÓ CONFIG ENTRA EM LOOP
    .then('config/dbConnection.js')
    .into(app);

module.exports = app;