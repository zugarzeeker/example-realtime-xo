var io = require('socket.io')(8000);
var clients = [];

io.on('connection', function(socket) {
	console.log('connected : ' + socket.id);
	clients.push(socket.id);

	socket.on('regame', function(data) {
		// something...
	});

	socket.on('join', function(username) {
		socket.username = username;
		console.log(username + ' join game');
		// prepare(socket); --> future step
	});

	socket.on('update', function(position) {
		// something...
	});

	socket.on('disconnect', function() {
		console.log('***[disconnected : ' + socket.id + ']');
		var index = clients.indexOf(socket.id);
		clients.splice(index, 1);
	});
});
