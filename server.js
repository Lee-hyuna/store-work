var express = require('express');
var app = express();
var router = require('./router/main')(app);
var path = require('path');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(4444, function(){
    console.log("Express server has started on port 4444 ---- START!!");
});

app.use(express.static(path.join(__dirname, 'public')));