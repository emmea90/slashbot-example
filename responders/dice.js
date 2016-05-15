
var shoutPattern = /^dice/i

/**
 * A simple responder. Listens for "shout <phrase>", and shouts it back.
 */
var dice = function(message,callback){
	var choosen = Math.floor((Math.random() * 6));
	callback(null, choosen);
}

dice.match = shoutPattern

module.exports = dice
