import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Issue with js modules __dirname not accessible. Not a problem with commonjs
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware for serving static files
app.use(express.static('assets'));

// Routes are evaluated from top to bottom
app.all('/', (req, res) => {
    //Express will handle basic headers and automatically sends the response
    res.sendFile(__dirname + '/assets/home.html');
})

app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>');
})

app.listen(3000);