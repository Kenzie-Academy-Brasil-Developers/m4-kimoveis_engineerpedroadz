import {Request,Response,NextFunction } from "express";
import { ZodTypeAny } from "zod";
import AppError from "../errors/AppError.error";
import { verify } from "jsonwebtoken";
import 'dotenv/config';

export const verifyBody = (schema: ZodTypeAny) => (req:Request, res: Response, next:NextFunction): void =>{ 
    req.body = schema.parse(req.body)
    
    return next();

}

export const verifyToken = (req:Request, res: Response, next:NextFunction): void => {
    const {authorization} = req.headers

    if(!authorization) throw new AppError('Missing bearer token',401);

    const token = authorization.split(' ')[1];
    const decoded = verify(token,process.env.SECRET_KEY!);
    res.locals = {...res.locals, decoded};
    return next();
}

export const verifyAdmin = (req:Request, res:Response, next:NextFunction): void =>{
    const {admin} = res.locals.decoded;

    if(!admin) throw new AppError('Insufficient permission',403);

    return next();
}

export const verifyPermissions = (req:Request, res:Response, next:NextFunction): void =>{
    const {id} = req.params
    const {sub,admin}= res.locals.decoded;

    if(admin) return next();

    if(id !== sub){
        throw new AppError('Insufficient permission',409)
    }

    return next();
}