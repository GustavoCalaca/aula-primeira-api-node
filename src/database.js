const { Pool } = require('pg');

// Configure os dados da conexão
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  // database: 'seu_banco_de_dados', // Substitua pelo nome do seu banco de dados
  password: 'postgres',
  port: 5432, // padrão do PostgreSQL
});

// Exporta a pool para uso em outros arquivos
module.exports = pool;