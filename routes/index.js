var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index2', function(req, res, next) {
  res.render('index2', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Express' });
});

router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/project1', function(req, res, next) {
  res.render('project1', { title: 'Express' });
});

router.get('/project2', function(req, res, next) {
  res.render('project2', { title: 'Express' });
});

router.get('/project3', function(req, res, next) {
  res.render('project3', { title: 'Express' });
});

router.get('/project4', function(req, res, next) {
  res.render('project4', { title: 'Express' });
});

router.get('/projecttest', function(req, res, next) {
  res.render('projecttest', { title: 'Express' });
});



module.exports = router;
