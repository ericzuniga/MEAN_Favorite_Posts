var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'QuestionsController',
		controllerAs: 'questionsCtrl',
		templateUrl: '/partials/questions.partial.html'
	})
	.when('/new_question', {
		controller: 'QuestionsController',
		controllerAs: 'questionsCtrl',
		templateUrl: '/partials/addQuestion.partial.html'
	})
	.when('/new_answer', {
		controller: 'QuestionsController',
		controllerAs: 'questionsCtrl',
		templateUrl: '/partials/answerQuestion.partial.html'
	})
	.when('/show_question', {
		controller: 'QuestionsController',
		controllerAs: 'questionsCtrl',
		templateUrl: '/partials/questionAnswers.partial.html'
	})
	.otherwise('/')
})