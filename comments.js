// create web server
// run: node comments.js
// access: http://localhost:3000/comments

var express = require('express');
var app = express();

// set port
app.set('port', process.env.PORT || 3000);

// set view engine
app.set('view engine', 'ejs');

// set views folder
app.set('views', './views');

// set static folder
app.use(express.static('./public'));

// set data
var comments = [
    { name: 'Tin', content: 'Hello' },
    { name: 'Teo', content: 'Hi' },
    { name: 'Ti', content: 'Hello' }
];

// set routing
app.get('/comments', function(req, res) {
    res.render('comments', { comments: comments });
});

// run server
app.listen(app.get('port'), function() {
    console.log('Server is running at port ' + app.get('port'));
});

// access: http://localhost:3000/comments