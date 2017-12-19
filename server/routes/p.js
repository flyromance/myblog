var router = require('express').Router();
const postModel = require('../models/post')

router.get('/', function (req, res) {

  postModel.getPosts()
    .then(function (articles) {
      console.log(321)
      res.render('pages/index', {
        list: articles,
        title: 'index',
      })
    }, function () {
      console.log(123)
    })
})

module.exports = router