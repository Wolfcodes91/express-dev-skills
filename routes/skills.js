var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills')
// All routes start with the path of '/todos'

// GET /skills (index functionality - list all todos)
router.get('/', skillsCtrl.index);
//GET /skills/new
router.get('/new', skillsCtrl.new);
// GET /skills/:id (show functionality - show a single todo)
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);
// GET /skills/:id/edit (edit functionality)
router.get('/:id/edit', skillsCtrl.edit)
// PUT /skills/:id (update functionality)
router.put('/:id', skillsCtrl.update) 


module.exports = router;