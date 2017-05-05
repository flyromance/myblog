var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/check').checkLogin;

// 用户列表页
router.get('/', checkLogin, function (req, res) {
    // 404
});

// 用户详情页
router.get('/:id', function (req, res) {
   // 取出数据
   // res.render('record', {}); 
});

module.exports = router;