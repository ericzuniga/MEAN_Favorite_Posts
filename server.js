var express = require('express')
var app = express()
var server = app.listen(1337)

// Sockets
var io = require('socket.io').listen(server)

// Body Parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())

// Session
var session = require('express-session')
app.use(session({
	patient: "",
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}))

app.use(express.static(__dirname + '/client'))

// Mongoose
require('./server/config/mongoose.js');
// HTTP Routes
require('./server/config/routes.js')(app);
