const path          = require('path');
const logger        = require('morgan');
const bodyParser    = require('body-parser');
const session       = require('express-session');
const flash         = require('express-flash');
const http          = require('http');
const engines       = require('consolidate');''
const express       = require('express')
const app = express()

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ saveUninitialized: true, resave: true, secret: 'secret' }));
app.use(flash());

app.use('/public', express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const scraper = require('./server/controllers/scraper');
app.get('/', (req, res) => res.render('home'));
app.post('/', scraper.retrieve)

const server = http.createServer(app);
server.listen(3000)