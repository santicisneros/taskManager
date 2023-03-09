const express = require('express');
const app = express();
const task = require('./routes/taskRouter.js')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler')


// middleware
app.use(express.static('./public'))
app.use(express.json());
//router
app.use('/api/v1/tasks',task)

app.use(notFound)
app.use(errorHandlerMiddleware)




const port = process.env.PORT || 3000;

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,console.log(`server is listen on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start();
