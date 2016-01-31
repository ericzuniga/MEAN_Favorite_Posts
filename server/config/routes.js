module.exports = function(app) {
	var questions = require('../controllers/questions.js');
	app

	// Index
	.get('/questions/', function(request, response) { questions.index(request, response) })
	// .get('/answers/', function(request, response) { questions.getanswers(request, response) })
	.post('/questions', function(request, response) { questions.create(request, response) })
	.post('/questions/answer', function(request, response) { questions.answer(request, response) })
	.post('/questions/answer/like', function(request, response) { questions.like(request, response) })

}