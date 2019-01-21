const express = require('express');
const socket = require('socket.io');

//Setup appki
const app = express();
const server = app.listen(4000, () => {
    console.log('hello, on port 4000 request');
    
});

//Pliki Statyczne
app.use(express.static('public'))

//Setup Socket
const io = socket(server);

//Listen for connections - socket is instance of that one parcicular socket
io.on('connection', (socket) => {
    console.log(`just made the connection with ${socket.id}`);
    
    socket.on('number', (data) => {
        io.sockets.emit('number', data)
    })
})