import { Router } from 'express'

import { getAllPosts, createPost, getPostByID } from '../controllers/postsControllers.js'

const postsRouter = Router()
postsRouter.get('/posts', getAllPosts )
postsRouter.post('/posts', createPost)
postsRouter.get('/posts/:id', getPostByID)


export default postsRouter