app.controller('QuestionsController', function(QuestionsFactory, $location){
	console.log("QuestionsController Loaded");
	var that = this;
	QuestionsFactory.logUser();
	that.user = QuestionsFactory.user;
	if(QuestionsFactory.selectedQuestion){
		that.selectedQuestion = QuestionsFactory.selectedQuestion;
	}
	if(QuestionsFactory.selectedAnswers){
		that.selectedAnswers = QuestionsFactory.selectedAnswers;
	}

	var getQuestions = function(){
		console.log("QuestionsController getQuestions");

		QuestionsFactory.getQuestions(function(questions){
			// console.log("testing step");
			that.questions = questions;
			// console.log("testing step 2");
			console.log(questions);
		});
	}
	this.addQuestion = function(newQuestion){
		console.log("QuestionsController addQuestion");
		newQuestion.creator = QuestionsFactory.user;
		console.log(newQuestion);
		console.log("Clicked - newQuestion through param ", newQuestion);
		if(newQuestion){
			if(newQuestion.question.length < 10){
				alert("Question must be at least 10 characters long.");
				return false;
			}
			QuestionsFactory.addQuestion(newQuestion, function(){
				alert('Question has been successfully entered.');
			});
		}
	}
	this.answerQuestionSelect = function(question){
		QuestionsFactory.selectQuestion(question);
		that.selectedQuestion = QuestionsFactory.selectedQuestion;
		console.log("just ran selectQuesiton");
		console.log(that.selectedQuestion);
		$location.path("/new_answer");
	}
	this.showQuestionSelect = function(question){
		console.log("starting showQuestionSelect");
		QuestionsFactory.selectQuestion(question);
		that.selectedQuestion = QuestionsFactory.selectedQuestion;
		console.log("just ran selectQuesiton");
		console.log(that.selectedQuestion);
		// QuestionsFactory.selectAnswers(question);
		$location.path("/show_question");
	}
	this.addAnswer = function(newAnswer){
		console.log("QuestionsController addAnswer");
		if(newAnswer){
			if(newAnswer.answer.length < 5){
				alert("Answer must be at least 5 characters long.");
				return false;
			}
			console.log(that.selectedQuestion._id);
			newAnswer.question_id = that.selectedQuestion._id;
			newAnswer.answer_creator = that.user;
			newAnswer.likes = 0;
			QuestionsFactory.addAnswer(newAnswer, function(){

			});
		}
	}
	this.addLike = function(answer){
		console.log("QuestionsController addLike");
		console.log(answer);
		if(answer){
			answer.likes++;
			console.log(answer);
			QuestionsFactory.addLike(answer, function(){

			});
		}
	}
	getQuestions();
});



