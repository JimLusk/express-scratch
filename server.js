import express, { response } from 'express';
import data from './data/positions.json';

const app = express();
const PORT = 3000;

//this is a public folder that hosts static content
app.use(express.static('public'));
//use the json middleware to parse incoming JSON for database work
//app.use(express.json());
app.use(express.urlencoded({extended: true}));

//this is for images folder and maps to the url path /images
app.use('/images', express.static('images'));

app.post(`/newItem`, (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.route(`/item`)
    .get((req, res) => {
        res.send(`a get request sent with /item route to port ${PORT}`);
    })
    .post((req, res) => {
        res.send(`a post request sent with /item route to port ${PORT}`);
    })
    .put((req, res) => {
        res.send(`a put request sent with /item route to port ${PORT}`);
    })
    .delete((req, res) => {
        res.send(`a delete request sent with /item route to port ${PORT}`);
    })

app.listen(PORT,() => {
    console.log(`Your server is running on port ${PORT}`);
    
});