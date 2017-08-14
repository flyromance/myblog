var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/check').checkLogin;

// 首页
router.get('/', function (req, res) {
    res.render('front/index', {
        title: '博客',
        isSigned: req.session.user ? true : false,
    });
});

// 文章详情页
router.get('/:id', function (req, res) {
    res.render('post', {

    });
});

// 文章新建
router.get('/create', checkLogin, function(req, res) {
    res.render('front/edit', {

    });
});

// 文章编辑
router.get('/edit/:id', checkLogin, function(req, res) {
    // 取数据

    res.render('front/edit', {

    })
});

// 创建留言
router.post('/:postid/comment', checkLogin, function () {

});

// 删除留言
router.get('/:postid/comment/delete', checkLogin, function (req, res) {

});

module.exports = router;