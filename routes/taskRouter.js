const express = require('express');
const router = express.Router();
const {getAllTasks, createTasks, deleteTask, getTask, updateTask} = require('../controllers/tasksControllers')

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router