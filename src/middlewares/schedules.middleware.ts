import { Request,Response,NextFunction } from "express"
import { categoryRepo, realEstateRepo, scheduleRepo, userRepo } from "../repositories";
import AppError from "../errors/AppError.error";
import RealEstate from "../entities/RealEstate.entity";
import Schedule from "../entities/Schedule.entity";


export const verifyRealEstateExists = async (req:Request,res:Response, next:NextFunction) : Promise<void>=> {
    const {realEstateId} = req.params 
    const realEstate: RealEstate | null = await realEstateRepo.findOneBy({id: Number(realEstateId)})

    if(!realEstate){
        throw new AppError('Real Estate not found', 404)
    }

    return next();
}

export const verifyRealEstateScheduleExists = async (req:Request,res:Response, next:NextFunction) : Promise<void>=> {
    const {realEstateId,date,hour} = req.body 
    const schedule: Schedule | null = await scheduleRepo.findOne({
        where:{
            realEstate: {
                id: Number(realEstateId)
            },
            hour,
            date
    }})

    if(schedule){
        throw new AppError('Schedule to this Real Estate at this date already exists',409)
    }

    return next();
}

export const verifyUserScheduleExists = async (req:Request,res:Response, next:NextFunction) : Promise<void>=> {
    
    let {sub} = res.locals.decoded
    sub = Number(sub)
    const {date,hour} = req.body 
    const schedule: Schedule | null = await scheduleRepo.findOne({
        where:{
            user: {
                id: sub
            },
            hour,
            date
    }})

    if(schedule){
        throw new AppError(' User schedule to this Real Estate at this date already exists',409)
    }

    return next();
}