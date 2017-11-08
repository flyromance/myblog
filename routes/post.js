var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/check').checkLogin;
var postModel = require('../models/post');

// 文章详情页
router.get('/:id', function (req, res) {

    // 通过id取文章资料
    postModel
        .getPostById(req.params.id)
        .then(function (article) {
            res.render('front/post', {
                user: req.session.user,
                article: article
            });
        })
        .catch(function (e) {

        });
});

// 新建或编辑页
router.get('/edit/:id', checkLogin, function (req, res) {
    const user = req.session.user;
    const id = req.params.id;

    // 通过用户查找所有文章
    // var postsPromise = postModel.getPosts(user.name)

    if (id) {
        postModel
            .getPostById(id)
            .then(function (article) {
                res.render('front/edit', {
                    user: user,
                    list: [{ title: '文章1', id: 213 }, { title: '文章2' }],
                    postId: id
                });
            })
            .catch(function (e) {

            });
    } else {
        res.render('front/edit', {
            user: user,
            list: [{ title: '文章1', id: 213 }, { title: '文章2' }],
        });
    }
});

// 提交新建文章
router.post('/', checkLogin, function (req, res) {

    postModel
        .create({
            author: req.session.user._id,
            title: req.fields.title,
            content: req.fields.content,
            pv: 0
        })
        .then(function (id) {
            console.log(id);
            id = id || 0;
            res.redirect(`post/${id}`);
        })
        .catch(function (e) {
            console.log(e);

        })

})





// 创建留言
router.post('/:postid/comment', checkLogin, function () {

});

// 删除留言
router.get('/:postid/comment/delete', checkLogin, function (req, res) {

});

module.exports = router;