const knex = require('./conexao')



exports.selectAtividade = (campo, next) => {
    knex('is_gera_cad').distinct('is_gera_cad_campos.numreg')
        .innerJoin('is_gera_cad_campos', 'is_gera_cad.id_funcao', '=', 'is_gera_cad_campos.id_funcao')
        .innerJoin('is_tp_atividade', 'is_tp_atividade.nome_tp_atividade', '=', 'is_gera_cad.titulo')
        .innerJoin('is_atividade', 'is_atividade.id_tp_atividade', '=', 'is_tp_atividade.numreg' )
        .where({
            'is_gera_cad.id_funcao': campo,
            'is_gera_cad_campos.exibe_formulario':  '1'
          })
        .select('is_gera_cad_campos.exibe_formulario', 
                'is_gera_cad_campos.ordem', 
                'is_gera_cad_campos.nome_grupo',
                'is_gera_cad_campos.id_aba',
                'is_gera_cad_campos.nome_aba',
                'is_gera_cad_campos.id_campo',
                'is_gera_cad_campos.nome_campo',
                'is_gera_cad_campos.tipo_campo',
                'is_gera_cad_campos.tamanho_campo',
                'is_gera_cad_campos.exibe_filtro',
                'is_gera_cad_campos.id_campo_lupa',
                'is_gera_cad_campos.sql_lupa',
                'is_gera_cad_campos.campo_descr_lupa',
                'is_gera_cad_campos.editavel',
                'is_tp_atividade.numreg',
                'is_gera_cad.titulo',
                'is_gera_cad.nome_tabela'
                ).
        then((datas) => {
            next(datas);
        }).catch(function (err) {
            next(err);
        })

}


exports.selectNotAtividade = (campo, next) => {
    knex('is_gera_cad')
        .innerJoin('is_gera_cad_campos', 'is_gera_cad.id_funcao', '=', 'is_gera_cad_campos.id_funcao')
        .where({
            'is_gera_cad.id_funcao': campo,
            'is_gera_cad_campos.exibe_formulario':  '1'
          })
        .select('is_gera_cad_campos.exibe_formulario', 
                'is_gera_cad_campos.ordem', 
                'is_gera_cad_campos.nome_grupo',
                'is_gera_cad_campos.id_aba',
                'is_gera_cad_campos.nome_aba',
                'is_gera_cad_campos.id_campo',
                'is_gera_cad_campos.nome_campo',
                'is_gera_cad_campos.tipo_campo',
                'is_gera_cad_campos.tamanho_campo',
                'is_gera_cad_campos.exibe_filtro',
                'is_gera_cad_campos.id_campo_lupa',
                'is_gera_cad_campos.campo_descr_lupa',
                'is_gera_cad_campos.editavel',
                'is_gera_cad_campos.sql_lupa',
                'is_gera_cad.nome_tabela',
                ).
        then((datas) => {
            next(datas);
        }).catch(function (err) {
            next(err);
        })

}



exports.savecampos = (campo, next) => {
    knex(campo.tabela)
    .insert(campo.data)
    .then((datas) => {
        next(datas)
    }).catch(function (err) {
        next(err)
    })

}