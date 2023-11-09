import { Router } from "express";
import { verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { verifyCategoryExists, verifyCategoryUniqueName } from "../middlewares/categories.middleware";
import { createCategoryController, readCategoryController, readRealEstateByCategoryController } from "../controllers/categories.controller";

export const categoryRouter: Router = Router()

categoryRouter.post('/' ,verifyToken, verifyAdmin, verifyCategoryUniqueName, createCategoryController);
categoryRouter.get('/', readCategoryController);
categoryRouter.get('/:id/realEstate', verifyCategoryExists, readRealEstateByCategoryController);

