import express from 'express';

const app = express();

/*
    App object has a few methods that correspond to HTTP verbs
    1) get - READ
    2) post - CREATE
    3) delete - DELETE
    4) put - UPDATE
    5) all - accepts any method
    Each takes 2 args
    1) A path
    2) A callback
*/

app.get('/', (req, res) => {
    res.send('<h1>GET</h1>');
});

app.post('/', (req, res) => {
    res.send('<h1>POST</h1>');
});

app.delete('/', (req, res) => {
    res.send('<h1>DELETE</h1>');
});

app.put('/', (req, res) => {
    res.send('<h1>PUT</h1>');
});

app.listen(3000);
