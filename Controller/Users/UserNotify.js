// Packages
const express = require('express');
const app = express.Router();
const bcrypt = require('bcrypt');
const flash = require('express-flash');
const session = require('express-session');
const bodyParser  = require('body-parser');
const cookieParser = require('cookie-parser');

// Database connection (Knex)
const db = require('../../Settings/db');

// Var Global
var date = new Date();
var statusCode;

app.get('/User/Nofications', async (req, res) => {
    
});

module.exports = app