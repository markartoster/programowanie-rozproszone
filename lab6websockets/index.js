const express = require('express');

//Setup appki
const app = express();
const server = app.listen(4000, () => {
    console.log('hello, on port 4000 request');
    
});

app.use(express.static('public'))