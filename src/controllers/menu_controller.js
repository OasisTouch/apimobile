var database = require('../bd/menu_bd')
const jwt = require('jsonwebtoken')
const Base = require('../model/base')
const geracadresponse = require('../model/gera_cad')




exports.menumodulos = (req, res, next) => {
    jwt.verify(req.token, 'secretkey', (err) => {
        if (err) {
            var basemessage = new Base("", "");
            basemessage.status = 1;
            basemessage.message = "Falha ao autenticar, token expirado!";
            res.status(500).send(basemessage);
        } else {
            database.getMenuModulos(function (datas) {
                if (datas.length > 0) {
                    res.status(200).send(new geracadresponse(datas, "", 0))
                }

            });

        }
    });
}



exports.menufuncoes = (req, res, next) => {
    jwt.verify(req.token, 'secretkey', (err) => {
        if (err) {
            var basemessage = new Base("", "");
            basemessage.status = 1;
            basemessage.message = "Falha ao autenticar, token expirado!";
            res.status(500).send(basemessage);
        } else {
            var id_modulo = req.params.id_modulo

            database.getMenuFuncoes(id_modulo, function (datas) {
                if (datas.length > 0) {
                    var nDatas = []
                    datas.forEach(element => {
                        if(element.url_programa.includes("gera_cad_lista")){
                           element.url_programa = url(element.url_programa)
                           nDatas.push(element)
                        }
                    });
                    res.status(200).send(new geracadresponse(nDatas, "", 0))
                }

            });

        }
    });
}


function url(item){
    var keyword=item.toString();
    var i = keyword.split('=');

    var is = i[2].split('@')

    return is[0].replace("'", " ").
    replace(")", " ").
    replace(";", " ").
    replace(">", " ")
}
