const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const userController = require('./controllers/userController');

const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());

// set user permission
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}));
app.use((req, res, next) => {
  res.locals.username = req.session.username;
  res.locals.errorMessage = req.flash('errorMessage');
  next();
});

// CRUD router
app.get('/', userController.getAll);
app.get('/about', userController.about);
app.get('/admin', userController.admin);
app.get('/login', userController.login);
app.get('/logout', userController.logout);
app.post('/handleLogin', userController.handleLogin);
app.post('/handleAddArticle', userController.handleAddArticle);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
