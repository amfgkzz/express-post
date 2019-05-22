const express = require('express');

const app = express();
const port = 5000;

// Console log in terminal what port is being listened to
app.listen(port, () => {
    console.log('listening to port:', port);
})

// Sending index.html to localhost:5000
app.use(express.static('public'));

// Sending quotes to localhost:5000/quotes
app.get('/quotes', (req, res)=> {
    let quotes = [
        {
            text: 'bla bla',
            author: 'bla bla'
        },
        {
            text: 'I do not know what I am doing',
            author: 'JK Rowling'
        },
        {
            text: 'I like to code',
            author: 'Emma Watson'
        }
    ]

    res.send(quotes);
})

