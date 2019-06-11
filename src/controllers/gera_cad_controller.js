var database = require('../bd/gera_cad_bd')
var genericsbd = require('../bd/genericbd')
const jwt = require('jsonwebtoken')
const Base = require('../model/base')
const geracadresponse = require('../model/gera_cad')
const verifica = require('../utils/verifica')






exports.get = (req, res, next) => {
    jwt.verify(req.token, 'secretkey', (err) => {
        if (err) {
            var basemessage = functionMessage();
            res.status(500).send(basemessage);
        } else {
            database.selectAtividade(req.params.campo, function (datas) {
                if (datas.length > 0) {
                       var dados = new geracadresponse(datas, "", 0);

                      verifica.verificaDatas(dados, function(item){
                          
                        res.status(200).send(new geracadresponse(item, "", 0))
                      })
                       
                } else {
                    database.selectNotAtividade(req.params.campo, function (datas) {
                        var dados = new geracadresponse(datas, "", 0);
                        verifica.verificaDatas(dados, function(item){
                            res.status(200).send(new geracadresponse(item, "", 0))
                        })
                    });
                }
            });

        }
    });
}

exports.getcampos = (req, res, next) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.send(err);
        } else {
            var dados = JSON.parse(JSON.stringify(req.body));

            genericsbd.select(dados.sql, function(dados){
                 res.status(200).send(dados);
            })
        }
    });
};


exports.savecampos = (req, res, next) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.send(err);
        } else {
            var dados = JSON.parse(JSON.stringify(req.body));
           
            database.savecampos(dados, function(resp){
                res.status(200).send(resp);
                console.log(resp)
           })
        }
    });
};



function functionMessage() {
    var basemessage = new Base("", "");
    basemessage.status = 1;
    basemessage.message = "Falha ao autenticar, token expirado!";
    return basemessage;
}


