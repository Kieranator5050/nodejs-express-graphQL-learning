// http is a native Nodejs module
import { createServer } from 'http';
import { readFileSync } from 'fs';

const server = createServer((req, res) => {
    /*
        HTTP Message
        1) Start Line
        2) Header
        3) Body
    */
    let responseCode;
    let headers;
    let body;

   const { url } = req
   const filePrefix = 'assets';
   switch (url) {
    // We need separate responses to handle the images and css on the home page
    case '/':
        responseCode = 200;
        headers = { 'content-type': 'text/html' };
        body = readFileSync(`${filePrefix}/home.html`);
        break;
    case '/nodePng.png':
        responseCode = 200;
        headers = { 'content-type': 'image/png' };
        body = readFileSync(`${filePrefix}/nodePng.png`);
        break;
    case '/home.css':
        responseCode = 200;
        headers = { 'content-type': 'text/css' };
        body = readFileSync(`${filePrefix}/home.css`);
        break;
    default:
        responseCode = 404;
        headers = { 'content-type': 'text/html' };
        body = '<h4>404 Not Found</h4>';
        break;
   }

    // writeHead takes a status code and object for mime-type
    res.writeHead(responseCode, headers);
    res.write(body);
    res.end();
});

// createServer returns an object with a listen method that takes a port
server.listen(3000);