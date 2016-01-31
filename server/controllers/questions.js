var mongoose = require('mongoose');
var Question = mongoose.model('Question');


module.exports = (function() {
	return {
		index: function(request, response){
			console.log("Server / Ctrl / Questions - Index");
			Question.find({$query:{}, $orderby:{created_at:-1}}, function(err, questions){
				console.log("searching");
				if(err){
					response.json([{date:"Updating, pleast be patient..."}]);
					// console.log(err);
				}
				else{
					response.json(questions);
					console.log(questions);
				}
			});
		},
		// getanswers: function(request, response){
		// 	console.log("Server / Ctrl / Questions - getanswers");
		// 	Question.find({$query:{_id:request.body._id}, $orderby:{"answers.$.likes":-1}}, function(err, answers){
		// 		console.log("searching");
		// 		if(err){
		// 			response.json([{date:"Updating, pleast be patient..."}]);
		// 			// console.log(err);
		// 		}
		// 		else{
		// 			response.json(answers);
		// 			console.log(answers);
		// 		}
		// 	});
		// },
		create: function(request, response){
			console.log("Server / Ctrl / Questions - Create");
			var question = new Question(request.body);
			question.save(function(err){
				if(err){
					response.json({status:false});
					// response.json([{first_name:"Updating, pleast be patient..."}]);
				}
				else{
					response.json({status:true});
				}
			})
		},
		answer: function(request, response){
			console.log("Server / Ctrl / Questions - Answer");
			Question.update({_id: request.body.question_id}, {$push:{answers:request.body}}, function(err){
				if(err){
					response.json([{date:"Updating, pleast be patient..."}]);
				}
				else{
					response.json({status:true});
				}
			})
		},
		like: function(request, response){
			console.log("Server / Ctrl / Questions - Like");
			Question.update({_id: request.body.question_id, "answers.answer_creator":request.body.answer_creator}, {$set:{"answers.$.likes": request.body.likes}}, function(err){
				if(err){
					response.json([{date:"Updating, pleast be patient..."}]);
				}
				else{
					response.json({status:true});
				}
			})
		}
	}
})();