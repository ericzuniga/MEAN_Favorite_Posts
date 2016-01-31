app.factory('QuestionsFactory', function($http, $location){
	return {
		getQuestions: function(callback){
			console.log("QuestionsFactory getQuestions");
			$http.get('/questions').success(function(response){
				console.log("getting");
				callback(response);
			});
		},
		// selectAnswers: function(question, callback){
		// 	console.log("QuestionsFactory getAnswers");
		// 	$http.get('/answers', question).success(function(response){
		// 		console.log("getting");
		// 		callback(response);
		// 	});
		// },
		addQuestion: function(newQuestion, callback){
			console.log("QuestionsFactory addQuestion", newQuestion);
			$http.post('/questions', newQuestion).success(function(response){
				callback(response);
				$location.path("/");
			});
		},
		addAnswer: function(newAnswer, callback){
			console.log("QuestionsFactory addAnswer", newAnswer);
			$http.post('/questions/answer', newAnswer).success(function(response){
				callback(response);
				this.selectQuestion == undefined;
				$location.path("/");
			});
		},
		addLike: function(answer, callback){
			console.log("QuestionsFactory addLike");
			$http.post('/questions/answer/like', answer).success(function(response){
				callback(response);
				$location.path("/show_question");
			});
		},
		logUser: function(){
			console.log("entered logUser");
			if(this.user === undefined){
				this.user = prompt("Please enter your name");
				$location.path("/");
			}
			console.log("factory has saved", this.user);
		},
		logout: function(){
			console.log("logging user out");
			this.user = undefined;
		},
		selectQuestion: function(question){
			this.selectedQuestion = question;
		}
		
	}
})

