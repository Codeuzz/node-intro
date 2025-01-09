import { Router } from 'express'

import { getAllPosts, createPost, getPostByID, deletePost } from '../controllers/postsControllers.js'

const postsRouter = Router()
postsRouter.get('/posts', getAllPosts )
postsRouter.post('/posts', createPost)
postsRouter.get('/posts/:id', getPostByID)
postsRouter.delete('/posts/:id', deletePost)


export default postsRouter