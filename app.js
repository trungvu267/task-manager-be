import express from 'express'
import task from './routes/task.js'
import connectDb from './db/connect.js'
const app = express()

app.use(express.json())

app.get('/hello', (req, res) => {
  res.send('Task Manager App')
})

app.use('/api/v1/task', task)

const port = 3000
const host = 'mongodb://localhost:27017'

const start = async () => {
  try {
    await connectDb(host)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
