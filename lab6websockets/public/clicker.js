//Estabilish connection
//Client socket
const socket = io.connect('http://localhost:4000/');

const button = document.querySelector('#clicker');
const amount = document.querySelector('#amount');
let clickTimes = 0;

//emmit event

button.addEventListener('click', () => {
    socket.emit('number', {
       number: clickTimes++ 
    })
})

//Listen for events
socket.on('number', (data) => {
    amount.innerHTML = data.number;
})