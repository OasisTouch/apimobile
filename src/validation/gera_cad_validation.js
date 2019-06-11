const {check, validationResult} = require('express-validator/check');



exports.post = () => { 
    check('campo').isLength({ min: 2 })
};
