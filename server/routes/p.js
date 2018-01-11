var router = require('express').Router();
const postModel = require('../models/post')

router.get('/', function (req, res) {

  postModel.getPosts()
    .then(function (articles) {
      res.render('pages/index', {
        list: articles,
        title: 'index',
      })
    }, function () {
    })
})

module.exports = router