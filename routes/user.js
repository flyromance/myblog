var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/check').checkLogin;

// 用户
router.get('/', checkLogin, function (req, res) {
    // 404
    res.render('admin/user', {
        
    });
});




// 文章列表
router.get('/posts', checkLogin, function (req, res) {
   // 取出数据
   // res.render('user', {}); 
});

// 文章修改
router.post('/posts/:id/edit', checkLogin, function (req, res) {

});

// 文章新建
router.post('/posts/:id/create', checkLogin, function (req, res) {

});

// 文章删除
router.get('/posts/:id/delete', checkLogin, function (req, res) {

});

module.exports = router;