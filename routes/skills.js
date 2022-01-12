var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills')
// All routes start with the path of '/todos'

// GET /todos (index functionality - list all todos)
router.get('/', skillsCtrl.index);
// GET /todos/:id (show functionality - show a single todo)
router.get('/:id', skillsCtrl.show);

module.exports = router;