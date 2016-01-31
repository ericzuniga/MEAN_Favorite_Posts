var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
	question: { type: String, trim: true },
	description: { type: String, trim: true},
	creator: { type: String},
	answers: { type: Array},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

mongoose.model('Question', QuestionSchema);

