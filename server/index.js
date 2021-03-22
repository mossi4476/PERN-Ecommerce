require('dotenv').config()

const express = require('express')
const sequelize = require('./db')

//models 
const models = require('./models/models')

//cors
const cors = require('cors')


const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())


// app.get('/', (req, res) => {
//     res.status(200).json( {message: "is work"})
// })

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