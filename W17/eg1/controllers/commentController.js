const commentModel = require('../models/commentModel')

const commentController = {
    add: (req, res, next) => {
        const { username } = req.session
        const { content } = req.body
        console.log(username, content)
        if (!username || !content) {
            req.flash('errorMessage', '留言失敗！')
            return res.redirect('/home')
        } commentModel.add(username, content, (err, result) => {
            if (err) {
                req.flash('errorMessage', err.toString())
            }
            next()
        })
    },

    index: (req, res) => {
        commentModel.getAll((err, results) => {
            if (err) {
                req.flash('errorMessage', '無法讀取留言，請重新整理')
            }
            res.render('index', { comments: results })
        })
    },

    delete: (req, res) => {
        const id = req.params.id
        const username = req.session.username
        console.log(id)
        commentModel.delete(id, username, (err) => {
            res.redirect('/home')
        })
    }
}

module.exports = commentController;