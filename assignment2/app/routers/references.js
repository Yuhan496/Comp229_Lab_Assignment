var express = require('express');
var router = express.Router();

var referencesController = require('../controllers/references');

router.get('/', referencesController.referencesList);
router.get('/:id', referencesController.getByID);

router.put('/:id', referencesController.processEdit);

router.delete('/:id', referencesController.processDelete);

router.post('/', referencesController.processAdd);

module.exports = router;
