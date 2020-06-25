var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

router.get('/lab1', function (req, res, next) {
  res.render('pages/lab1', { title: 'Express' });
});

router.get('/lab2', function (req, res, next) {
  res.render('pages/lab2', { title: 'Express' });
});

router.get('/lab3', function (req, res, next) {
  res.render('pages/lab3', { title: 'Express' });
});
module.exports = router;
