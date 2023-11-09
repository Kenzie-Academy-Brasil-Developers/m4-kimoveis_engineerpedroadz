import { Request,Response,NextFunction } from "express"
import Category from "../entities/Category.entity";
import { categoryRepo, userRepo } from "../repositories";
import AppError from "../errors/AppError.error";
import User from "../entities/User.entity";

export const verifyUserUniqueEmail = async (req:Request,res:Response, next:NextFunction) : Promise<void>=> {
    const {email} = req.body 
    const user: User | null = await userRepo.findOneBy({email})

    if(user){
        throw new AppError('User already exists', 409)
    }

    return next();
}

export const verifyUserExists = async (req:Request,res:Response, next:NextFunction) : Promise<void>=> {
    const {id} = req.params 
    const user: User | null = await userRepo.findOneBy({id: Number(id)})

    if(!user){
        throw new AppError('User not found', 404)
    }

    res.locals = {...res.locals, user}
    return next();
}