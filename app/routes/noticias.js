var dbConnection = require('../../config/dbConnection')
module.exports = function (app) {
    app.get('/noticias', function (req, res) {

        var connection = dbConnection();

        connection.query('SELECT * FROM noticias', function (erro, result) {
            console.log(erro);
            //PARA ENVIAR O RESULTADO SEM USAR O RENDER
            //res.send(result);   
            res.render("noticias/noticias",{noticias:result});
        });
        

    });
}
