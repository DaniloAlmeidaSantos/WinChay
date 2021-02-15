// Packages
const express = require('express');
const app = express.Router();
const bcrypt = require('bcrypt');
const flash = require('express-flash');
const session = require('express-session');
const bodyParser  = require('body-parser');
const cookieParser = require('cookie-parser');

// Middlewares
const UserNofications = require('../../Middlewares/UserNotify');

// Objects
const Create = require('../../Src/Register/CreateServer');
const Select = require('../../Src/Select/SelectServers');

// Database connection (Knex)
const db = require('../../Settings/db');

// Var Global
var date = new Date();
var statusCode;

// Routers
app.post('/server', async (req, res) => {
    let {name, password, nPlayers} = req.body;
    
    console.log(password)

     // Code: Lembrar que o SRVIDCREATOR será passado através de uma session
    statusCode = await Create.CreateServer(name, nPlayers, password, 1) ? 200 : 400;

    res.sendStatus(statusCode);
});

// Code: Lembrar de passar o Middleware de autenticação, fazendo a comparação com idCreator == idSession
// Middleware que será utilizado: ../../Middlewares/AuthenticatorIdCreator
app.post('/Alter/Server/:id', async (req, res) => {
    let {name, passowrd, nPlayers} = req.body;
    let id = req.params.id;
    
    statusCode = await Create.CreateServer(name, nPlayers, passowrd, 1) ? 200 : 400;

    res.sendStatus(statusCode);
});

app.post('/invite', async (req, res) => {
    // Code: Será passada uma ComboBox com IDs dos servidores daquele perfil
});

module.exports = app;