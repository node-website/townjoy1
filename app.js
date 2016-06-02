
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , ejsmate = require('ejs-mate');

var app = express();

// all environments
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname, '/views'));

app.set('view engine', 'html');
app.engine('html', ejsmate);

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/zh', routes.index);
app.get('/zh/summary', routes.summary);
app.get('/zh/product', routes.product);
app.get('/zh/sofa', routes.sofa);
app.get('/zh/scarf', routes.scarf);
app.get('/zh/contact', routes.contact);

var server = http.createServer(app).listen(app.get('port'),function () {
      var host = server.address().address;
      var port = server.address().port;
      console.log('listening at http://%s:%s', host, port);
    }
  );
