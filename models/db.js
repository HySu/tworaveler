// db.js
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var uri = 'mongodb://admin:dyedkn4$@localhost:27017/mydb'; // AWS에서 테스트시 사용

var options = {
	db: { native_parse: true },
	server: { poolsSize: 200 }
}
var db = mongoose.createConnection(uri, options);

autoIncrement.initialize(db);

db.once('open', function(){
	console.log('MongoDB connected successfully');
});

db.on('error', function(err){
	if(err) console.log('db err=', err);
});

module.exports = db;