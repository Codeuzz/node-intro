import { Router } from "express";
import musics from '../data/musics.js'

const musicsRouter = Router()



musicsRouter.get('/musics', (request, response) => {
    response.json(musics)
})


musicsRouter.get('/musics/:id', (req, res) => {
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


musicsRouter.post('/musics', (req, res) => {
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
        return res.status(201).json(newMusic)
    }
    catch(err){
        return res.status(500).json({ message : 'Internal server error'})
    }
})

musicsRouter.put('/musics/:id', (req, res) => {
    const { id } = req.params
    const { name, author, genre } = req.body;

    try {
        const musicIndex = musics.findIndex(music => music.id === parseInt(id));
        if (musicIndex === -1) {
            return res.status(404).json({ message: 'Music not found' });
        }

        if (name) musics[musicIndex].name = name;
        if (author) musics[musicIndex].author = author
        if (genre) musics[musicIndex].genre = genre

        return res.status(200).json(musics[musicIndex])
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

musicsRouter.delete('/musics/:id', (req, res) => {
    const {id} = req.params
    const musicIndex = musics.findIndex(music => music.id === parseInt(id, 10));

    if (musicIndex === -1) {
        return res.status(404).json({ message: 'Music to delete not found' });
    }

    musics.splice(musicIndex, 1)
    return res.status(200).json({ message: 'Music deleted successfully' });
})


export default musicsRouter