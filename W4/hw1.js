const request = require('request');

request.get({
    url: 'https://lidemy-book-store.herokuapp.com/books?_limit=10'
},
    function (err, res, body) {
        let book = JSON.parse(body)
        for (let i = 0; i < book.length; i++) {
            console.log(book[i].id, book[i].name)
        }
    }
)