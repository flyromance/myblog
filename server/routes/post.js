var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/check').checkLogin;
var postModel = require('../models/post');

router.get('/list', checkLogin, function (req, res) {
    const user = req.session.user;

    postModel.getPosts(user._id)
        .then(function (articles) {
            console.log(articles);
            res.render('pages/list', {
                lists: articles
            })
        })
});


// 新建/编辑页
// /post/edit?p=xxx
router.get('/edit', checkLogin, function (req, res) {
    const user = req.session.user;
    const postId = req.query.pid;

    // 通过用户查找所有文章
    // var postsPromise = postModel.getPosts(user.name)
    const postData = null;

    if (postId) {
        postModel.getPostById(postId)
            .then(function (article) {
                console.log(article)
                res.render('pages/edit', {
                    user: user,
                    list: [{ title: '文章1', id: 213 }, { title: '文章2' }],
                    article: {
                        author: article.author.name,
                        title: article.title,
                        content: article.content,
                        pid: article._id,
                    },
                });
            })
    } else {
        res.render('pages/edit', {
            user: user,
            list: [{ title: '文章1', id: 213 }, { title: '文章2' }],
            article: {}
        });
    }
});

// 新建/编辑
router.post('/edit', checkLogin, function (req, res) {
    var user = req.session.user;
    var postId = req.fields.pid;

    if (postId) {
        postModel.updatePostById(postId, user._id, {
            title: req.fields.title,
            content: req.fields.content,
        })
    } else {
        postModel
            .create({
                author: req.session.user._id,
                title: req.fields.title,
                content: req.fields.content,
                pv: 0
            })
            .then(function (pid) {
                console.log(pid);
                res.redirect(`/post/${pid}`);
            })
            .catch(function (e) {
                console.log(e);
            })
    }
});




// 创建留言
router.post('/:postid/comment', checkLogin, function () {

});

// 删除留言
router.get('/:postid/comment/delete', checkLogin, function (req, res) {

});

module.exports = router;