import Posts from "../models/Posts.js"


export const getAllPosts = async (req, res) => {
    try{
        const posts = await Posts.find().populate('userId')
        if(posts.length < 1){
            return res.json({message : 'Posts not found'})
        }
        return res.json(posts)
    }
    catch(err){
        return res.status(500).json({message : 'Internal server error in getAllPosts'})
    }
}

export const createPost = async (req, res) => {
    try{
        const newPost = await Posts.create(req.body)        
        return res.status(201).json(newPost)
    }
    catch(err){
        return res.status(500).json({message : 'Internal server error in createPost'})
    }
}

export const getPostByID = async (req, res) => {
    const {id} = req.params
    try {
        const postById = await Posts.findById(id).populate('userId')
        if (!postById) {
            return res.status(404).json({message: 'Post not found'});
        }
        
        return res.status(200).json(postById)
    }
    catch(err) {
        return res.status(500).json({message: "internal serveer error in getPostById"})
    }
}