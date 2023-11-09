import { Request, Response } from "express"
import { UserReturn } from "../interfaces/user.interface"
import { createUserService, readUsersService, userUpdateService } from "../services/users.service"
import { DeleteDateColumn } from "typeorm";
import { categoryCreateService, readCategoryService, readRealEstateByCategoryService } from "../services/categories.service";
import { Category } from "../entities";

export const createCategoryController = async (req:Request, res:Response):Promise<Response> =>{
    const category: Category  = await categoryCreateService(req.body);

    return res.status(201).json(category)
}

export const readCategoryController = async (req:Request, res:Response):Promise<Response> =>{
    const categories = await readCategoryService();

    return res.status(200).json(categories)
}

export const readRealEstateByCategoryController = async (req:Request, res:Response):Promise<Response> =>{
    const {id} = req.params;
    const realEstates = await readRealEstateByCategoryService(Number(id));

    return res.status(200).json(realEstates)
}
