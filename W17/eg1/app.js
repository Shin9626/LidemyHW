const express = require('express')
const app = express()
const port = 5001
const db = require('./db')

const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')

const todoController = require('./controllers/todoController')
const userController = require('./controllers/userController')

app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    //cookie: { secure: true }
}))
app.use((req, res, next) => {
    res.locals.isLogin = req.session.isLogin;
    res.locals.errorMessage = req.flash('errorMessage')
    next()
})

//CRUD method

app.get('/home', todoController.get);
app.get('/login', userController.login);
app.get('/logout', userController.logout);
app.get('/register', (req, res) => {
    res.render('register')
});
app.post('/login', userController.handleLogin);
app.post('/register', userController.register);

app.listen(port, () => {
    db.connect((err) => {
        if (err) throw err;
        console.log('Connected!')
    });
    console.log(`Example app listening on port ${port}`)
})