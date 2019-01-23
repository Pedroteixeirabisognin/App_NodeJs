module.exports = function (app) {
    app.get('/noticias', function (req, res) {

        var mysql = require('mysql');

        var connection = mysql.createConnection({

            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '',
            database: 'portal_noticias'

        });

        connection.query('SELECT * FROM noticias', function (erro, result) {
            console.log(erro);
            
         res.render("noticias/noticias",{noticias:result});
        });

    });
}
