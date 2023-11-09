import { Request, Response } from "express"
import { UserReturn } from "../interfaces/user.interface"
import { createUserService, readUsersService, userUpdateService } from "../services/users.service"
import { DeleteDateColumn } from "typeorm";

export const createUserController = async (req:Request, res:Response):Promise<Response> =>{
    const user: UserReturn = await createUserService(req.body);

    return res.status(201).json(user)
}

export const readUsersController = async (req:Request, res:Response):Promise<Response> =>{
    const userList = await readUsersService();

    return res.status(200).json(userList)
}

export const updateUserController = async (req:Request, res:Response):Promise<Response> =>{
    const {user} = res.locals
    const userUpdated = await userUpdateService(req.body, user);

    return res.status(200).json(userUpdated)
}

export const deleteUserController = async (req:Request, res:Response):Promise<Response> =>{
    const {user} = res.locals
    await DeleteDateColumn(user);

    return res.status(204).json()
}