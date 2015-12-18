
var shoutPattern = /^jarvis cercami/i

/**
 * A simple responder. Listens for "shout <phrase>", and shouts it back.
 */
var search = function(message,callback){
    var link = 'http://lmgtfy.com/?q=' + encodeURIComponent(message)
    callback(null,'hai provato a cercarlo su google? ' + link)
}

search.match = shoutPattern

module.exports = search
