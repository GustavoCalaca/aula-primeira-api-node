const express = require('express');
const app = express(); // Corrigido: 'const =' para 'const app ='
const pool = require('./database.js'); // Corrigido: 'const =' para 'const pool ='
const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.send('Hello, World!'); // Adicionado um exemplo de resposta
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/clientes', async (request, response) => {

try { 

    const result = await  pool.query('SELECT * FROM clientes');

    response.send(result.rows);

} catch (err) { }

response.status(500).send('Error retrieving clients');

})