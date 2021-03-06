const express = require('express')
// const cors = require('cors')
const app = express()
// const cookieParser = require('cookie-parser')
// import csvAppend from "csv-append";

const mongoose = require('mongoose')

const authController = require('./controller/auth')

// const middleware = require('./utils/middleware')
// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(cookieParser())
app.use('/api/auth', authController)
// app.use(middleware.unknownEndpoint)


const server = app.listen(5000, (err) => {
    if (err) console.error(err)
    else {
      console.log(`Server started at 4000`)
      mongoose.connect('mongodb://127.0.0.1:27017/acg', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }, (error) => {
        if (error) console.error(error)
        else console.log('Connected to mongodb uri')
      })
    }
  })