import { Request, Response,NextFunction } from "express";
import Address from "../entities/Address.entity";
import { addressRepo } from "../repositories";
import AppError from "../errors/AppError.error";

export const verifyAddressExists = async (req:Request,res:Response, next:NextFunction) : Promise<void>=> {
    const {address} = req.body 
    const addressExists: Address | null = await addressRepo.findOne({
        where:{
            street: address.street,
            zipCode: address.zipCode,
            number: address.number,
            city: address.city,
            state: address.state,
        }
    })

   if(addressExists){
    throw new AppError('Address already exists',409)
   }
    
   return next()
}