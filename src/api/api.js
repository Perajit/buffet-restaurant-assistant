import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import router from './router'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// Connect to database
mongoose.connect('mongodb://localhost:27017/buffet_restaurant_assistant_test')

// Route API
router(app)

// Start server
const API_PORT = 8081
app.listen(API_PORT, () => {
  console.log(`***** Started server at ${API_PORT}`)
})