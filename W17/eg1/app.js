const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const db = require('./db')
const todoController = require('./controllers/todoController')
const app = express()
const port = 5001

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    //cookie: { secure: true }
}))

app.set('view engine', 'ejs');

app.get('/home', todoController.get);
app.get('/login', (req, res) => {
    res.render('login')
});
app.get('/logout', (req, res) => {
    req.session.isLogin = false;
    res.redirect('/home');
});
app.post('/home', todoController.add);
app.post('/login', (req, res) => {
    if (req.body.password === 'abc') {
        req.session.isLogin = true;
        res.redirect('/home')
    } else {
        res.redirect('/login')
    }
});

app.listen(port, () => {
    db.connect((err) => {
        if (err) throw err;
        console.log('Connected!')
    });
    console.log(`Example app listening on port ${port}`)
})