//ARQUIVO DE INICIALIZAÇÃO

import app from './app';
import database from './database';

database.sync() //database.sync({force: true})FORCE (APENAS AMBIENTE DEV) - Forçar criação da tabela
console.log("database running at 3306");

app.listen(3001);
console.log("server running at 3001");
