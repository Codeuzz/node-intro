import { Router } from 'express'

import { getAllPosts, createPost, getPostByID, deletePost } from '../controllers/postsControllers.js'
import { verifyUser } from '../middlewares/loginVerification.js'

const postsRouter = Router()
postsRouter.get('/posts', verifyUser, getAllPosts )
postsRouter.post('/posts', createPost)
postsRouter.get('/posts/:id', getPostByID)
postsRouter.delete('/posts/:id', deletePost)


export default postsRouter