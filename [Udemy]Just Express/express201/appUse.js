import express from 'express';
import helmet from 'helmet';

const app = express();

// Middleware sits between the Request and Response
// A middleware function has access to the req, res and next object
/*
    Example middleware requirements
    - First the request comes in
    1) We may need to validate the user
    2) We may need to access a database
    3) We may need to parse data from a user
    - The response is sent
*/

function validateUser(req, res, next) {
    // The response object has a locals property which lives during the duration of the response
    // Can be used to pass data from place to place
    res.locals.validated = true;
    // Make sure to call next() to keep the request going
    next();
}

// If we don't specify a path all paths will run this middleware
// Specifying a path runs the middleware on a specific path
// Generally for each app we need helmet(), static(), json(), urlencoded() middleware
app.use(helmet()); // Usually we put this first, basic security fixes
app.use(express.static('public'));
app.use(express.json()); // Need to parse request body
app.use(express.urlencoded({ extended: false })); // Needed to parse request body
app.use('/admin', validateUser);

app.get('/', (req, res, next) => {  
    res.send('<h1>Home</h1>');
})

app.get('/admin', (req, res, next) => {
    console.log(res.locals.validated);
    res.send('<h1>Admin</h1>');
})

app.post('/ajax', (req, res) => {
    res.json(req.body);
})

app.listen(3000);