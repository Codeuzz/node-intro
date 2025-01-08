import express from "express";
import 'dotenv/config'
import cors from "cors"
import musicsRouter from "./routes/musicsRouter.js";

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/api', musicsRouter)

app.get('/', (request, response) => {
    response.send(`Welcome to my API`)
})


app.listen(8000, () => console.log(`server running on port ${PORT}`))