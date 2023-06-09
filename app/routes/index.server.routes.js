/*
 * File: index.server.routers.js
 * Name: Sheng Wang
 * ID: 300765817
 * Date: Jun 7, 2023
 */


var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'SW' });
});
router.get('/about', function (req, res, next) {
    res.render('about', { title: 'About' });
});
router.get('/projects', function (req, res, next) {
    res.render('projects', { title: 'Projects' });
});
router.get('/services', function (req, res, next) {
    res.render('services', { title: 'Services' });
});
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact' });
});
module.exports = router;