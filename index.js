import express from "express";

const app = express()

app.get("/", (request, response) => {
    response.send('welcome to my API') 
})

app.listen(8000, () => console.log('server running on poort 8000'))