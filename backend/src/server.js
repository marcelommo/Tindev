//importar a biblioteca do express
const express = require('express');

//criar o servidor do express - constante pq nao sofrera alteracoes
const server = express();

//tratativa de rota para lidar com as requisiçoes AJAX, HTTP ou qlqr outra
//na api rest os metodos principais sao: get, post, put e delete
//     GET(buscar uma informacao da API)
//     POST(criar algum tipo de registro/entidade dentro da API)
//     PUT(editar)
//     DELETE(deletar)

//recebe uma requisicao e devolve uma resposta em forma de objeto no json
server.get('/', function(requisicao, resposta){
    return resposta.json({ message: `Hello ${requisicao.query.name}`});
});
 
//para acessar esse servidor, eu tenho que ouvir ele - porta 3333
server.listen(3333);
