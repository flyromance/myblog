var sha1 = require('sha1');
var express = require('express');
var router = express.Router();
var checkNotLogin = require('../middlewares/check').checkNotLogin;
var userModel = require('../models/user');

router.get('/', checkNotLogin, function (req, res) {
    res.render('pages/signin', {
        title: '登录'
    });
});

router.post('/', checkNotLogin, function (req, res, next) {
    console.log(req.fields);
    var username = req.fields.username;
    var password = req.fields.password;
    var preurl = req.query.preurl;

    userModel.getUserByName(username)
        .then(function (user) {
            if (!user) {
                req.flash('error', '用户不存在');
                res.redirect('back');
            }
            
            if (sha1(password) !== user.password) {
                req.flash('error', '密码错误');
                res.redirect('back');
            }

            req.flash('success', '登陆成功');

            // delete user.password; 

            req.session.user = user;

            res.redirect(preurl ? preurl : '/post'); // 返回首页，或者之前一个页面
        })
        .catch(function () {
            console.log('error');
            next()
        })
});

module.exports = router;