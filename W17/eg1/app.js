const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const todoController = require('./controllers/todoController')
const app = express()
const port = 5001

app.use(express.static(__dirname));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/home', todoController.get);
app.post('/home', todoController.add);

app.listen(port, () => {
    db.connect((err) => {
        if (err) throw err;
        console.log('Connected!')
    });
    console.log(`Example app listening on port ${port}`)
})