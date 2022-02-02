const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api', function (req, res) {
    res.send({
        status: 64,
        message: "Kardeşim get methodu geçmez buradan"
    });
});

app.post('/api', function (req, res) {
    res.send({
        status: "OK",
        message: "Veriler işlendi",
        posted_data: req.body
    });
});

app.listen(9000);
