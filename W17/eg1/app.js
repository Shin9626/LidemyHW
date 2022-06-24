const express = require('express')
const app = express()
const port = 5001
const db = require('./db')

const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')

const userController = require('./controllers/userController')
const commentController = require('./controllers/commentController')

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
    res.locals.username = req.session.username;
    res.locals.errorMessage = req.flash('errorMessage')
    next()
})

function redirectBack(req, res) {
    return res.redirect('back');
}

//CRUD method

app.get('/home', commentController.index);
app.get('/home/login', userController.login);
app.get('/home/logout', userController.logout);
app.get('/home/register', (req, res) => {
    res.render('register')
});
app.get('/home/update_comment/:id', commentController.update);
app.get('/home/delete_comment/:id', commentController.delete);
app.post('/home/login', userController.handleLogin, redirectBack);
app.post('/home/register', userController.handleRegister, redirectBack);
app.post('/home/comments', commentController.add, redirectBack);
app.post('/home/update_comment/:id', commentController.handleUpdate);

app.listen(port, () => {
    db.connect((err) => {
        if (err) throw err;
        console.log('Connected!')
    });
    console.log(`Example app listening on port ${port}`)
})