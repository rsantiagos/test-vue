var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/'));
// app.use('components', express.static(__dirname + '/components/'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(function(req, res, next) {  
  res.status(404).json({error: 'No se encontró el servicio, por favor verifique su ruta.'});    
});

app.set('port', process.env.PORT || 3000);   

app.listen(app.get('port'), function () {
  console.log('Express started on server: ' + app.get('port'));
});
