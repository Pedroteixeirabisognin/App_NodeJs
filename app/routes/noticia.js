module.exports = function (app) {

    app.get('/noticia', function (req, res) {

        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;
        noticiasModel.getNoticia(connection, function (erro, result) {
            console.log(erro);
            res.render("noticias/noticia", { noticia: result });
        });

    });

}