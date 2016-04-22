
var shoutPattern = /^choose/i

/**
 * A simple responder. Listens for "shout <phrase>", and shouts it back.
 */
var shout = function(message,callback){
	var choices = message.trim().split(",");
	var choosen = Math.floor((Math.random() * *len(choices)) + 1);
	callback(null, choices[choosen])
}

choose.match = shoutPattern

module.exports = choose
