import { Router } from "express";
import { verifyUserExists, verifyUserUniqueEmail } from "../middlewares/users.middleware";
import { verifyAdmin, verifyBody, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { createUserController } from "../controllers/users.controller";
import { createUserSchema } from "../schemas/user.schema";

export const userRouter: Router = Router();

userRouter.post('/',verifyBody(createUserSchema), verifyUserUniqueEmail, createUserController);
userRouter.get('/', verifyToken, verifyAdmin);
userRouter.patch('/', verifyBody, verifyToken,verifyUserExists, verifyPermissions);
userRouter.delete('/',verifyToken,verifyUserExists, verifyPermissions,verifyAdmin)