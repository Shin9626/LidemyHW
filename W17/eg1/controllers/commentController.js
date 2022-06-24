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
        commentModel.delete(req.params.id, req.session.username, (err) => {
            res.redirect('/home')
        })
    },

    update: (req, res) => {
        commentModel.get(req.params.id, req.session.username, (err, result) => {
            res.render('update', { comment: result })
        })
    },

    handleUpdate: (req, res) => {
        commentModel.update(req.params.id, req.session.username, req.body.content, (err) => {
            if (err) {
                req.flash('errorMessage', '更新失敗，請重新嘗試')
                res.redirect('back')
            }
            res.redirect('/home')
        })
    },
}

module.exports = commentController;