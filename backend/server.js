const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const usersRoute = require('./routes/crudRoute')
const { connectApp } = require('./MongoCon/connect')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/users', usersRoute)
connectDB()

async function connectDB() {
  await connectApp(process.env.MONGO_URL)
  app.listen(process.env.PORT, () => {
    console.log('app is running on port 8000...')
  })
}
