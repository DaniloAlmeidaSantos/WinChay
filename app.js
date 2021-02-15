// Packages
const express = require('express')
const app = express()
const flash  = require('express-flash');
const session = require('express-session');
const bodyParser  = require('body-parser');
const cookieParser = require('cookie-parser');

const port = 8080 // Port

// parser application/json
app.use(bodyParser.json());

app.use(cookieParser("Hash:IDAE@#43224-e324ddewer"));

// Session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

// Routers
const UserLogin = require('./Controller/Users/UserLogin'); 
const UserRegister = require('./Controller/Users/UserRegister');
const ServerGet = require('./Controller/Server/ServerGet') 
const ServerCreate = require('./Controller/Server/ServerCreate');

app.use('/', UserLogin);
app.use('/', UserRegister);
app.use('/', ServerGet);
app.use('/', ServerCreate);

app.listen(port, () => console.log(`WebApiWinChay is running`));