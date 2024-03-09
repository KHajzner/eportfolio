const express = require('express');
var bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.get('/api', function(req, res) {
    res.send("hello");
});
app.post('/api', function(req, res) {
    console.log('receiving data ...');
    console.log('body is ',req.body);
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send(req.body);
});


app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})