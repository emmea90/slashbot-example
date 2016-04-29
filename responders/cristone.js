
var shoutPattern = /^cristone/i

var subject = ['Dio', 'Cristo', 'Giuseppe', 'San Pietro', 'San Paolo', 'Dio', 'Dio', 'Dio', 'Dio', 'Jahve', 'Allah', 'Buddha', 'Siddharta'];
var object = ['cane', 'porco', 'maiale', 'coniglio', 'canguro', 'ornitorinco', 'formichiere', 'pecora', 'montone', 'agnello', 'gatto', 'iscariota', 'Palma', 'telefono', 'a tre dita', 'Protappo', 'Carota', 'suino', 'ovino', 'di Cerro Veronese', 'stupratore', 'juventino', 'ladro', 'abruzzese'];

/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}


/**
 * A simple responder. Listens for "shout <phrase>", and shouts it back.
 */
var cristone = function(message,callback){
	try {
		shuffle(subject);
		shuffle(object);
		var response = subject[0] + ' ' + object[0]
		callback(null, response);
	}
	catch(err) {
		callback(null, "Error");
	}
}

cristone.match = shoutPattern

module.exports = cristone