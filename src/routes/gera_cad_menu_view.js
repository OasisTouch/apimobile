const express = require('express');
const router = express.Router();
const controller = require('../controllers/menu_controller')
const verify = require('../controllers/login_controller')



router.get('/menumodulo', verify.verifyToken, controller.menumodulos);
router.get('/menufuncoes/:id_modulo', verify.verifyToken, controller.menufuncoes);


module.exports = router