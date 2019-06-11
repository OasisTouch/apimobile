const {check, validationResult} = require('express-validator/check');



exports.get = () => {
    check('id_usuario').not().isEmpty().withMessage('Usuário não pode ser vazio.'),
    check('senha').not().isEmpty().withMessage('Senha não pode ser vazio.')  
};
