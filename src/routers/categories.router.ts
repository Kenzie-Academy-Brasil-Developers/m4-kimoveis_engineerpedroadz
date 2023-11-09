import { Router } from "express";
import { verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { verifyCategoryExists, verifyCategoryUniqueName } from "../middlewares/categories.middleware";

export const categoryRouter: Router = Router()

categoryRouter.post('/' ,verifyToken, verifyAdmin, verifyCategoryUniqueName);
categoryRouter.get('/');
categoryRouter.get('/:id/realEstate', verifyCategoryExists);

