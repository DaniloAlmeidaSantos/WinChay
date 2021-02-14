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
const Register = require('../../Src/Register/RegisterUser');

// Database connection (Knex)
const db = require('../../Settings/db');

// Var Global
var date = new Date();
var statusCode;

// Routers
app.post('/User/Register', async (req, res) => {
    let {name, password, email, age} = req.body;

    age = (age) ? null : age;

    statusCode = await Check.VerifyUserRegister(name, password, email) ? 200 : 401;

    if (statusCode === 200) {
        statusCode = await Register.RegisterUser(name, password, email, age) ? 200 : 401;
    } else {
        statusCode = 401;
    }

    res.sendStatus(statusCode); 
});

module.exports = app