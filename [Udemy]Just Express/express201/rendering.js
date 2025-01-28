import express from 'express';
import { engine } from 'express-handlebars';
import helmet from 'helmet';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

// Issue with js modules __dirname not accessible. Not a problem with commonjs
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'public'));

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res, next) => {
    // This takes a file and the data to use with the file
    res.render('index');
})

app.listen(3000);