// Packages
const express = require('express');
const app = express.Router();
const bcrypt = require('bcrypt');
const flash = require('express-flash');
const session = require('express-session');
const bodyParser  = require('body-parser');
const cookieParser = require('cookie-parser');

// Objects
const Check = require('../../Src/Verify/VerifyingUser');

// Database connection (Knex)
const db = require('../../Settings/db');

// Var Global
var date = new Date();
var statusCode;

app.post('/User/authenticate', async (req, res) => {
    let {email, password} = req.body;

    statusCode = await Check.VerifyUserLogin(email, password) ? 200 : 401;

    console.log("Verificando retorno de verificação: ", statusCode);

    if (statusCode == 200) {
        req.session.notify = [];
    } else {
        // Code
    }

    res.sendStatus(statusCode);

});

module.exports = app