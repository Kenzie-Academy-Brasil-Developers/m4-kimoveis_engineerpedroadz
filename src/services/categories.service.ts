import { Category } from "../entities";
import AppError from "../errors/AppError.error";
import { CreateCategory } from "../interfaces/category.interface";
import { categoryRepo } from "../repositories";

export const categoryCreateService = async (data: CreateCategory): Promise<Category> =>{
    return await categoryRepo.save(data);
}

export const readCategoryService = async (): Promise<Category[]> =>{
    return await categoryRepo.find();
}

export const readRealEstateByCategoryService = async (id:number): Promise<Category> =>{
    const category = await categoryRepo.findOne({
        where:{
            id
        },
        relations:{
            realEstate:true
        }
    });
    if(!category){
        throw new AppError('Category not found',404)
    }
    return category;
}