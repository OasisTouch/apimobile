//importar o expess
const express = require('express');


const bodyParser =  require("body-parser");
const expressValidator = require("express-validator");
const app = express();
const router = express.Router();
const dotenv = require('dotenv');

//Rotas
const index = require('./routes/login_view');
const managementsroutes = require('./routes/gera_cad_view');
const menuroutes = require('./routes/gera_cad_menu_view');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/', index);
app.use('/geracad', managementsroutes);
app.use('/', menuroutes);



dotenv.config();
module.exports = app









