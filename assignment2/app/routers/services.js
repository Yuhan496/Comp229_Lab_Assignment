var express = require('express');
var router = express.Router();

var servicesController = require('../controllers/services');

router.get('/', servicesController.servicesList);
router.get('/:id', servicesController.getByID);

router.put('/:id', servicesController.processEdit);

router.delete('/:id', servicesController.processDelete);

router.post('/', servicesController.processAdd);

module.exports = router;
