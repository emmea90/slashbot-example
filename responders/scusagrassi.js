
var shoutPattern = /^scusagrassi/i

var subject = ['Mia mamma', 'Mio papa\'', 'Il cane', 'Mio padre', 'Mia nonna', 'Mio cugino', 'Mia cugina', 'La mia ragazza', 'Un mio amico', 'La mia maestra', 'Il prete', 'Girotto', 'Palma', 'Dio'];
var action = ['ha mangiato', 'ha bevuto', 'ha visto', 'ha chiesto', 'ha baciato', 'ha cagato', 'ha attaccato', 'ha staccato', 'ha leccato', 'ha rubato', 'ha composto', 'ha congelato',	'ha formato', 'ha sbattuto', 'ha rovesciato', 'ha rivoltato'];
var object = ['il computer', 'una mela', 'un vibratore', 'una pera', 'una macchina', 'una bambola gonfiabile', 'una chiave', 'una tazza di caffe\'', 'una finestra', 'una porta', 'un clacson', 'un dito', 'il cane', 'il gatto', 'il pianoforte', 'il tavolo', 'un pennarello', 'un dildo', 'un preservativo'];
var locus = ['in casa', 'sulla mia faccia', 'sul mio cazzo', 'sulla mia mano', 'sul mio pavimento',	'in camera mia', 'a scuola', 'sul computer', 'nel mio culo']

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
var scusagrassi = function(message,callback){
	try {
		shuffle(subject);
		shuffle(action);
		shuffle(object);
		shuffle(locus);
		var response = subject[0] + ' ' + action[0] + ' ' + object[0] + ' ' + locus[0]
		callback(null, response);
	}
	catch(err) {
		callback(null, "Error");
	}
}

scusagrassi.match = shoutPattern

module.exports = scusagrassi
