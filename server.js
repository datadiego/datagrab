const express = require('express');
const app = express();
const cors = require('cors')
const escapeHtml = require('escape-html');
app.use(cors());

let texto = "";

app.get('/', (req, res) => {
    console.log('El usuario llamó a /');
    res.send('Hola mundo');
});

app.get('/grab', (req,res) => {
    const data = req.query.data;
    texto += escapeHtml(data);
    res.send(texto);
})

app.get('/read', (req,res) => {
    res.send(texto);
})


app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});