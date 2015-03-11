var express=require("express");
var morgan=require("morgan");
var app=express();
//var logger=morgan("dev");
app.use(morgan('dev'));


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/blah', function (req, res) {
  res.send('Hello Blah!');
});

/*var server = */app.listen(3000, function () {

  //var host = server.address().address;
  //var port = server.address().port;

  console.log('server listening');

});
