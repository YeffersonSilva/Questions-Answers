const express = require('express');
const app = express();

// dicinedo para el express que voy usar view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});