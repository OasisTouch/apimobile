const express = require('express');
const router = express.Router();
const controller = require('../controllers/gera_cad_controller')
const verify = require('../controllers/login_controller')



router.get('/:campo', verify.verifyToken, controller.get);
router.post('/sql', verify.verifyToken, controller.getcampos);
router.post('/save', verify.verifyToken, controller.savecampos);

module.exports = router