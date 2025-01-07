import express from "express";
import 'dotenv/config'
import musics from "./data/musics.js";

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.get("/", (request, response) => {
    response.send('welcome to my API') 
})

app.get('/musics', (request, response) => {
    response.json(musics)
})


app.get('/musics/:id', (req, res) => {
    const id = parseInt(req.params.id, 10)

    try {
        const music = musics.find(m => m.id === id); 
        console.log(music)
        if (!music) {
            return res.status(404).json({ error: "Music not found" });
        }

        res.status(200).json(music)

    }catch {
        res.status(500).json({message: 'Internal server error'})

    }
    
});


app.post('/musics', (req, res) => {
    let {name, author, genre} = req.body
    try{
        if(!name || !author || !genre){
            return res.status(401).json({message : 'All fields are required'})
        }
        const newMusic = {
            id : musics.length + 1,
            name,
            author,
            genre
        }
        musics.push(newMusic)
        return res.status(201).json(musics)
    }
    catch(err){
        return res.status(500).json({ message : 'Internal server error'})
    }
})

app.listen(8000, () => console.log(`server running on port ${PORT}`))