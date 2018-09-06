'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');
var app = module.exports = loopback();
var bodyParser = require('body-parser');
var axios = require('axios');
var instance = axios.create({
  baseURL: 'http://127.0.0.1:3000/api'
});

app.use(bodyParser.json());

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
app.use(loopback.static(path.resolve(__dirname, '../client_src/public')));
app.use(loopback.static(path.resolve(__dirname, '../client_src/dist')));
app.use('/robots.txt', function (req, res, next) {
  res.type('text/plain')
  res.send("User-agent: *\nDisallow: /");
});
// Sub-apps like REST API are mounted via boot scripts.
app.post('/articlelist',(req, res) =>{
 instance.get('/articles')
 .then((r) =>{
   res.send(r.data)
 })
 .catch((err) =>{
console.log(err)
 })
})

app.post('/choosenarticle', (req, res) =>{
  const {id} = req.body
  console.log("survey name", req.body)
  instance.get('/articles/' + id)
  .then((r) => {
    console.log('/articles:id', r.data)
    res.send(r.data)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.post('/choosentopic', (req, res) =>{
  const {id} = req.body
  console.log("Topic Server", req.body)
  instance.get('/articles/' + id + '/topics/')
  .then((r) => {
    console.log('/articles:id', r.data)
    res.send(r.data)
  })
  .catch((err) => {
    console.log(err)
  })
})


boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
