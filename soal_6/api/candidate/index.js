const express = require('express');
const router = express.Router();
const controller = require('./candidate.controller');

router.get('/', controller.index);
router.get('/seed', controller.seeding);
router.put('/:id', controller.vote);

module.exports = router;