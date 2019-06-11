const userbd = require('../bd/login_bd')
const jwt = require('jsonwebtoken')
const accountresponses = require('../model/usertoken')
const Base = require('../model/base')



// FORMAT OF TOKEN
// Authorization: Bearer <acess_token>

exports.login = (req, res, next) =>{

    var user = JSON.parse(JSON.stringify(req.body));
    var AccountResponse = new accountresponses("", "", 0);

    userbd.auth(user, function (datas) {

        if(datas.length > 0){

            var token = jwt.sign(user, 'secretkey', { expiresIn: 36000 }) 
            AccountResponse.token = token;
            AccountResponse.status = 0;
            res.json({
                AccountResponse
            });
        }else{
            AccountResponse.status = 1;
            AccountResponse.token = "";
            AccountResponse.message = "Usuário ou senha incorreta";
            res.json({
                AccountResponse
            })
        }
    });
}


//Verify token
exports.verifyToken = (req, res, next) => {
    //get header authorization value
    var basemessage = new Base("", "");

    if(typeof(req.headers['authorization']) == 'undefined'){
        basemessage.status = 0;
        basemessage.message = "Parâmetro header faltando";
        res.json(401, {message: 'Token não encontrado ou informado'})
    }

    if (typeof(req.headers['authorization']) !== 'undefined') {
        const beareHeader = req.headers['authorization'];


        const bearer = beareHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;

        next();

    } else {
       basemessage.status = 0;
       basemessage.message = "Usuário não autorizado";
       res.json(401, {message: 'Token não encontrado ou informado'})
    }
}