var mongoose = require('mongoose');

// Books Scehema
var bookSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	publisher:{
		type: String
	},
	pages:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String,
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Book = module.exports = mongoose.model('books', bookSchema);

// GET Books

module.exports.getBooks = function(callback, limit) {
	Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id, callback) {
	Book.findById(id, callback);
}

module.exports.addBook = function(book, callback) {
	Book.create(book, callback);
}

module.exports.updateBook = function(id, book, options,callback) {
	var query = {_id: id};
	var update = {
		title: book.title,
		genre: book.genre,
		author: book.author,
		description: book.description,
		pages: book.pages,
		publisher: book.publisher,
		image_url: book.image_url,
		buy_url: book.buy_url,
	};
	Book.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteBook = function(id, callback) {
	var query = {_id: id};
	Book.remove(query, callback);
}