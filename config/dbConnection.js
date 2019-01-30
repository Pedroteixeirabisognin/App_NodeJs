var mysql = require('mysql');

//WRAPPER = "EMBRULHA" O MÉTODO DE CONEXÃO EM UMA VARIÁVEL 
//EVITA QUE O MÉTODO SEJA EXECUTADO A CADA REQUISIÇÃO ESTABELECIDA, PODENDO SER EXECUTADA SÓ QUANDO FOR NECESSÁRIO
var connMySQL = function () {

    return mysql.createConnection({

        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'portal_noticias'

    });

}

module.exports = function(){
    console.log('O módulo de connexão foi carregado!');
    
   return connMySQL
}