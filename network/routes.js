const { Router } = require('express')
const router = Router()

const { agregarCliente, obtenerCliente} = require('../components/tienda/controller');

router.get('/tienda', obtenerCliente);
router.post('/tienda', agregarCliente);

module.exports = router