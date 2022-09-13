import Task from '../models/task.model.js'

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({})
    res.status(200).json({ allTasks })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    if (!task) {
      return res.status(404).json({ message: `No task has id ${taskID}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    await Task.findByIdAndDelete({ _id: taskID })

    res.status(200).json({ task: null, message: 'success' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({ message: 'success' })

    if (!task) {
      return res.status(404).json({ message: `No task has id ${taskID}` })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { getAllTasks, createTask, getTask, updateTask, deleteTask }
