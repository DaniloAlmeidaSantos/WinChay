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

// Routes
app.get('/servers', UserNofications, async (req, res) => {
    // Code: Selecionar todos os torneios com Max Players > Players inscritos 
    // Code: Se estiver cheio retornar "Lotado"
    var server;

    statusCode = await Select.AvailableServers() ? 200 : 400;

    if (statusCode == 200) {
        server = await Select.AvailableServers()
    }

    res.sendStatus(200);
});

module.exports = app;