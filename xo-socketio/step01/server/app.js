var count = 0;
var io = require('socket.io')(8000);
io.on('connection', function(socket) {
	io.sockets.emit('message', 'HelloClient, I am server nClients = [' + (count++) + ']');
	console.log('connected : ' + socket.id);

	socket.on('message', function(message) {
		console.log('Recieve : ' + message);
	});

	socket.on('disconnect', function() {
		console.log('disconnected : ' + socket.id);
	});
});