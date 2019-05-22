const express = require('express');

const app = express();
const port = 5000;
let quotes_data = [
    { text: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { text: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { text: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

// Console log in terminal what port is being listened to
app.listen(port, () => {
    console.log('listening to port:', port);
});

// Sending index.html to localhost:5000
app.use(express.static('public'));

// Sending quotes to localhost:5000/quotes
app.get('/quotes', (req, res)=> {
    res.send(quotes_data);
});

