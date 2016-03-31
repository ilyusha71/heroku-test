var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var wakakaGalaxyInfo = 
{
	title:['оди́н', 'два́', 'три́', 'четы́ре', 'пя́ть', 'ше́сть', 'се́мь', 'во́семь', 'де́вять', 'де́сять', 'оди́н на дцать', 'две на́ дцать'],
	imgPath:['wakaka01','wakaka02','wakaka03','wakaka04','wakaka05','wakaka06','wakaka07','wakaka08','wakaka09','wakaka10','wakaka11','wakaka12']
}

app.use(express.static(__dirname + '/public'));

app.use('/', function (req, res, next) 
{
	console.log('Request Url:' + req.url);
	next();
}
);

/* EJS -> view folder */
app.set('view engine', 'ejs'); 

/* index.ejs -> index.html */
app.get('/', function(req, res) 
{
	res.render('index',wakakaGalaxyInfo);
}
);

app.listen(port);
