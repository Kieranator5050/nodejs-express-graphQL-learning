import express from 'express';

const app = express();

// We have a use method on app and this takes the middleware you want to run across the app
// Express gives us the prebuild static middleware to serve static files
app.use(express.static('assets'));


app.listen(3000);
