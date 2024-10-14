const express = require('express');
const app = express();

let texto = "";

app.get('/', (req, res) => {
    console.log('El usuario llamó a /');
    res.send('Hola mundo');
});

app.get('/grab', (req,res) => {
    const data = req.query.data;
    texto += data;
    res.send(data);
})

app.get('/read', (req,res) => {
    res.send(texto);
})


app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});