var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/check').checkLogin;

// 首页
router.get('/', function (req, res) {
    res.render('front/index', {
        title: '博客'
    });
});

// 文章详情页
router.get('/:id', function (req, res) {
    res.render('post', {

    });
});

// 创建留言
router.post('/:postid/comment', checkLogin, function () {

});

// 删除留言
router.get('/:postid/comment/delete', checkLogin, function (req, res) {

});

module.exports = router;