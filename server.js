var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/netid', function(request, response){
    response.send('YOUR SHOULD PUT YOUR NETID HERE!!');
});

app.get('/nickname', function(request, response){
    response.send('brave-eagle');
});

app.listen(process.env.PORT || 4000);