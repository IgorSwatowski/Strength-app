

require('dotenv').config()
import mongoose from "mongoose"

const express = require('express')
const cors = require("cors");

const userRoutes = require('./routes/user')
const dashboardRoutes = require("./routes/dashboard")

const PORT = 5000;
const app = express();
app.use(express.json())
app.use(cors(
    { 
        origin: "*"
    }
));


// routes
app.use('/api/user', userRoutes)
app.use('/dashboard', dashboardRoutes)


// connect to db
mongoose.connect(process.env.MONGO_URL!)
  .then(() => {
    app.listen(PORT, () => {
      console.log('connected to db & listening on port', PORT)
    })
  })
  .catch((error: any) => {
    console.log(error)
  })