require('dotenv').config()

const express = require('express')
const sequelize = require('./db')

//models 
const models = require('./models/models')

//cors
const cors = require('cors')

//file upload
const fileUpload = require('express-fileupload')

//main router
const router = require('./routes/index')

const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)

//Handler errors, last Middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch(e){
        console.log(e);
    }
}


start()