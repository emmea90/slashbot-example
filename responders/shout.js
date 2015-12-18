
var shoutPattern = /^shout/i

/**
 * A simple responder. Listens for "shout <phrase>", and shouts it back.
 */
var shout = function(message,callback){
	var test = Math.random();
    if(test < 0.5) {
  		callback(null, message.replace(shoutPattern,'').toUpperCase())
  	else {
  		callback(null,'non sono il tuo schiavo')
  	}
}

shout.match = shoutPattern

module.exports = shout
