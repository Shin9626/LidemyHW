const request = require('request');
const process = require('process');

var args = process.argv;

request.get({
    url: 'https://lidemy-book-store.herokuapp.com/books'
},
    (err, res, body) => {
        if (res.statusCode == 200) ArgsBehavior(args, body);
    }
)

var ArgsBehavior = function (args, body) {
    let books = JSON.parse(body);

    switch (args[2]) {

        case 'list': {
            books.forEach((val, index) => { console.log(`${val.id} ${val.name}`) })
            break;
        }

        case 'read': {
            books.forEach((val, index) => { if (val.id == args[3]) console.log(`id ${val.id} 是 ${val.name}`) })
            break;
        }

        case 'delete': {
            request.delete({
                url: `https://lidemy-book-store.herokuapp.com/books/${args[3]}`
            },
                (err, res, body) => {
                    if (err) console.log('刪除失敗')
                    else console.log('刪除成功')
                })
            break;
        }

        case 'create': {
            request.post({ url: `https://lidemy-book-store.herokuapp.com/books/`, form: { name: args[3] } },
                (err) => {  
                    if (err) console.log('新增失敗')
                    else console.log('新增成功')
                })
            break;
        }

        case 'update': {
            request.patch({ url: `https://lidemy-book-store.herokuapp.com/books/${args[3]}`, form: { name: args[3] } },
                (err) => {
                    if (err) console.log('更新失敗')
                    else console.log('更新成功')
                })
            break;
        }
        case null:
        default:
            break;
    }
}