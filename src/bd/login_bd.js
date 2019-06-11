const knex = require('./conexao')


exports.auth = (dados, onCompleted) => {
    knex('is_usuario').
        where('is_usuario.id_usuario' , dados.id_usuario).andWhere(
              'is_usuario.senha' , dados.senha).
              select().
        then((datas) => {
            onCompleted(datas)
        }).catch(function (err) {
            onCompleted(err)
        })
}