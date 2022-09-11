import express from 'express'
import {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from '../controller/task.controller.js'

const router = express.Router()

router.get('/', getAllTasks)
router.post('/', createTask)
router.get('/:id-task', getTask)
router.put('/', updateTask)
router.delete('/', deleteTask)

export default router
