var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/check').checkLogin;

router.post('/', checkLogin, function (req, res) {
    res.json({});
});

module.exports = router;