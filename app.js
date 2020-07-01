const express = require ('express');
const app = express();
app.use (express.static('public'))

app.listen ('3000', () => {console.log('Servidor corriendo en puerto 3000')});

app.get ('/', (req, resp) => {
    resp.sendFile (__dirname + "/views/index.html");

});
app.get('/ayuda.html', (req, resp) => {
    resp.sendFile (__dirname + '/views/ayuda.html');
});
app.get('/tiendas.html', (req, resp) => {
    resp.sendFile (__dirname + '/views/tiendas.html');
});