const knex = require('./conexao')



exports.getMenuModulos = (next) => {
    knex('is_modulos')
        .where('is_modulos.id_sistema', '=', 'CRM')
        .orderBy('nome_modulo')
        .select('id_modulo',
            'nome_modulo').
        then((datas) => {
            next(datas);
        }).catch(function (err) {
            next(err);
        });
}

exports.getMenuFuncoes = (id_modulo, next) => {
  knex('is_modulos').innerJoin('is_funcoes',
         'is_funcoes.id_modulo', '=', 'is_modulos.id_modulo')
        .where({
            'is_modulos.id_sistema ': 'CRM',
            'is_modulos.id_modulo': id_modulo,

        })
        .select('is_funcoes.id_modulo',
            'is_funcoes.id_funcao',
            'is_funcoes.nome_funcao',
            'is_funcoes.nome_grupo',
            'is_funcoes.ordem',
            'is_funcoes.id_sistema',
            'is_funcoes.url_programa',
        ).
        then((datas) => {
            next(datas);
        }).catch(function (err) {
            next(err);
        })
    }



