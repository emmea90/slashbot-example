
var shoutPattern = /^search/i

/**
 * A simple responder. Listens for "shout <phrase>", and shouts it back.
 */
var search = function(message,callback){
	var test = Math.random();
    if(test < 0.7) {
    	var linkfailure = 'http://lmgtfy.com/?q=' + encodeURIComponent(message)
    	callback(null,'hai provato a cercarlo su google? ' + linkfailure)
    } else {
    	var linksuccess = 'https://www.google.it/search?q=' + encodeURIComponent(message)
    	callback(null,'ecco, padrone ' + linksuccess)
    }
}

search.match = shoutPattern

module.exports = search
