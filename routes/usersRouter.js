import { Router } from "express";
import { createUser, getAllUsers, getUserById, deleteUser } from "../controllers/userControllers.js";

const userRouter = Router()

userRouter.get('/users', getAllUsers)

userRouter.get('/users/:id', getUserById)

userRouter.post('/users', createUser)

userRouter.delete('/users/:id', deleteUser)


export default userRouter