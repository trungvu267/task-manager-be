import express from 'express'
import task from './routes/task.js'
import connectDb from './db/connect.js'
import notFound from './middlewares/not-found.js'
import dotenv from 'dotenv'
import errorHandlerMiddleware from './middlewares/error-handler.js'
dotenv.config()
const app = express()

app.use(express.static('./public'))
app.use(express.json())

app.get('/hello', (req, res) => {
  res.send('Task Manager App')
})

app.use('/api/v1/task', task)
app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URL)
    app.listen(process.env.PORT, () =>
      console.log(`Server is listening on port ${process.env.PORT}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
