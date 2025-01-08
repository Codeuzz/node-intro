import { Router } from "express";
import Users from "../models/Users.js"
import { createUser, getAllUsers, getUserById } from "../controllers/userControllers.js";

const userRouter = Router()

userRouter.get('/users', getAllUsers)

userRouter.get('/users/:id', getUserById)

userRouter.post('/users', createUser)


export default userRouter