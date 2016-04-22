
var shoutPattern = /^choose/i

/**
 * A simple responder. Listens for "shout <phrase>", and shouts it back.
 */
var choose = function(message,callback){
	var choices = message.trim().split(":");
	choices = choices[1].trim().split(",");
	var choosen = Math.floor((Math.random() * choices.length));
	callback(null, choices[choosen]);
}

choose.match = shoutPattern

module.exports = choose
