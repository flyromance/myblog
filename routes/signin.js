var express = require('express');
var router = express.Router();
var checkNotLogin = require('../middlewares/check').checkNotLogin;

router.get('/', checkNotLogin, function (req, res) {
    res.render('signin');
});

router.post('/', checkNotLogin, function (req, res) {
    res.json({});
});

module.exports = router;