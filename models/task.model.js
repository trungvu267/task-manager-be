import mongoose from 'mongoose'

const Schema = mongoose.Schema
const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    maxLength: [20, 'name cant must be more than 20 characters'],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

export default mongoose.model('Task', TaskSchema)
