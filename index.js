const express = require('express');
const bodyp = require('body-parser');
const app = express();
app.use(bodyp.urlencoded({ extended: true }));
app.listen(3000, function () {
    console.log('Port is opend on http://localhost:3000');
})
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})
app.post('/', function (req, res) {
    var h = Number(req.body.height);
    var w = Number(req.body.weight);
    var result = (w / h / h) * 10000;
    res.send(`<h2>Your bmi is ${result.toFixed(2)}</h2>`);
})