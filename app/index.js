const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('paginaIMC');
});

app.listen(PORT, () => {
    console.log(`App rodando em http://localhost:${PORT}`);
});

module.exports = app;