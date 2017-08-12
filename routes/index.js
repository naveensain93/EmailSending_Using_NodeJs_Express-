var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
var nodemailer = require('nodemailer');
var router = express.Router();
/*var hbs = require('nodemailer-express-handlebars');*/

var mailer = nodemailer.createTransport({
	service: "Gmail", 
    auth: {
    	user: "naveen.bizviz@gmail.com",
    	pass: "naveen$@!n93"
    }
});

/*mailer.use('compile', hsb({
	viewPath: 'views/email',
	extname: '.hsb'
}));*/
/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

sendemail = function(req, res) {
	var email = req.params.emailid;
	console.log(email);  
	mailer.sendMail({
		  to: 'naveen.sain@bdbizviz.com',
		  subject: 'Node Js Email Demo',
		  html: "<p>here your data goes</p>"
		  /*template: 'recover',
		  context: {}*/
	  },function(err, response) {
		  if(err){
			  res.send("bad email");
			  console.log("Email not sent");
		  }
		  res.send("Good Email");
		  console.log("Email sent.....");
	  });
};
module.exports = router;
