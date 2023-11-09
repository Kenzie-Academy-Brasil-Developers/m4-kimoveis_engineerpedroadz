import { Router } from "express";
import { verifyUserExists, verifyUserUniqueEmail } from "../middlewares/users.middleware";
import { verifyAdmin, verifyBody, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { createUserController, deleteUserController, readUsersController, updateUserController } from "../controllers/users.controller";
import { createUserSchema, updateUserSchema } from "../schemas/user.schema";

export const userRouter: Router = Router();

userRouter.post('/',verifyBody(createUserSchema), verifyUserUniqueEmail, createUserController);
userRouter.get('/', verifyToken, verifyAdmin, readUsersController);
userRouter.patch('/:id', verifyBody(updateUserSchema), verifyToken,verifyUserExists, verifyPermissions, updateUserController);
userRouter.delete('/:id',verifyToken,verifyUserExists, verifyPermissions,verifyAdmin, deleteUserController)