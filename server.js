var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('HELLO MGT-656!');
});

app.get('/nickname', function(request, response){
    response.send('smoggy-lion');
});



app.listen(process.env.PORT || 4000);