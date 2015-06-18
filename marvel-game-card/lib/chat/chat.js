var template = require('./template.jade')

var $ = require('jquery')
var io = require('socket.io-client')

var socket = io()

function Chat(selector) {
	$(selector).html(template())

	$('from').submit(function(){
		socket.emit('chat message', $('#m').val())
		$('#m').val('')
		return false
	})

	socket.on('chat message', function(msg){
		$('#messages').apped($('<li>').text(msg))
	})
}

module.exports = Chat