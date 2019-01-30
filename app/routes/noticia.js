module.exports = function (app) {

    app.get('/noticia', function (req, res) {

        var connection = app.config.dbConnection();

        connection.query("SELECT * FROM noticias where id_noticia = 2 ", function (erro, result) {
            console.log(erro);
            //PARA ENVIAR O RESULTADO SEM USAR O RENDER
            //res.send(result);   
            res.render("noticias/noticia", { noticia: result });
        });


    });
}
