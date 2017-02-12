// server.js
var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.report.json');
var router = jsonServer.router('db.report.json')
var middlewares = jsonServer.defaults();
var express = require('express'),
    cors = require('cors'),
    app = express();



// app.use(cors());



// var app = express();
// // ...

// // You may want to mount JSON Server on a specific end-point, for example /api
// // Optiona,l except if you want to have JSON Server defaults
// // server.use('/api', jsonServer.defaults()); 
// app.use(router);

// app.listen(5000, function() {
//     console.log('server started..')
// });


server.use(middlewares)
server.use(router)
server.listen(5000, function() {
    console.log('JSON Server is running')
})