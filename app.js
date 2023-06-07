const express = require('express');
const path = require('path');
const indexRouter = require('./router/index.server.router');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// define routes
app.get('/', function(req, res) {
    res.render('index', { title: 'SW_Home' });
});

app.get('/about', function(req, res) {
    res.render('about', { title: 'About Me' });
});

app.get('/projects', function(req, res) {
    res.render('projects', { title: 'Projects' });
});

app.get('/services', function(req, res) {
    res.render('services', { title: 'Services' });
});

app.get('/contact', function(req, res) {
    res.render('contact', { title: 'Contact Me' });
});

app.listen(3000, function () {
  console.log('Portfolio app listening on port 3000!');
});

module.exports = app;
