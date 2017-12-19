var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/check').checkLogin;
var userModel = require('../models/user');

// 用户列表页
router.get('/', checkLogin, function (req, res) {
    // 404
});

// 用户详情页
router.get('/:id', function (req, res) {
    // 取出数据
    // res.render('record', {}); 
    var username = req.params.id;
    var user = req.session.user;
    console.log(user);
    if (user) {
        res.render('pages/record', {
            user: user,
        });
    } else {
        res.redirect('back');
    }
});

module.exports = router;