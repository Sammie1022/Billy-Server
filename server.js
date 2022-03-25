// const express = require('express')
// const morgan = require('morgan')
// const cors = require('cors')
// const connectDB = require('./config/db')
// const passport = require('passport')
// const bodyParser = require('body-parser')
// const routes = require('./routes/index')
// const faqsRoutes = require('./routes/faqs')
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import connectDB from './config/db.js'
import passport from 'passport'
import bodyParser from 'body-parser'
// import routes from '.'
import faqsRouter from './routes/faqs.js'
import buildingsRouter from './routes/buildings.js'
import aboutRouter from './routes/about.js'

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//app.use(routes)
app.use(faqsRouter)
app.use(buildingsRouter)
app.use(aboutRouter)
app.use(passport.initialize())

//require('./config/passport')(passport)

const PORT = process.env.PORT || 3000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
