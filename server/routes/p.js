var router = require('express').Router();
const postModel = require('../models/post')

router.get('/:id', function (req, res) {
  console.log(req.params.id)
  postModel.getPostById(req.params.id)
    .then(function (article) {
      res.render('pages/post', {
        article: article
      })
    })
  
})

module.exports = router