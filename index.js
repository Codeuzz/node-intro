import express from "express";
import 'dotenv/config'
import cors from "cors"
import musicsRouter from "./routes/musicsRouter.js";
import userRouter from "./routes/usersRouter.js";
import mongoose from "mongoose";
import postsRouter from "./routes/postsRouter.js";

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/api', musicsRouter, userRouter, postsRouter)

app.get('/', (request, response) => {
    response.send(`Welcome to my API`)
})

const mongoDB = process.env.MONGO_URI;
mongoose.connect(mongoDB, {useNewUrlParser: true});
const db = mongoose.connection ;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:" ));

app.listen(8000, () => console.log(`server running on port ${PORT}`))