const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.post('/api/data', (req, res) => {
    const requestData = req.body;
    console.log('Received data from IPST WiFi module:', requestData);

    res.render('dataTemplate', { data: requestData });
});

const port = 6785;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
