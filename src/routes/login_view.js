const express = require('express');
const user = require('../controllers/login_controller')

const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});



router.post('/login', function (req, res, next) {

    user.login(req, res, function(datas) {
       console.log(datas);
    });
    
});

module.exports = router;