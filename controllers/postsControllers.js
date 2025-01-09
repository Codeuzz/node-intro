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
        const { title, body, userId } = req.body;

        if (!userId) {
            return res.status(400).json({ message: "userId is required" });
        }
        const newPost = await Posts.create({ title, body, userId })       
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

export const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Posts.findByIdAndDelete(id); 
        if (!post) {
            return res.status(404).json({ message: 'Post to delete not found' });  
        }

        return res.status(200).json({ message: 'Post deleted successfully', post }); 
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error in deletePost', error: err.message }); 
    }
};