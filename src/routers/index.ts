import { Router } from "express";
import { userRouter } from "./user.router";
import { sessionRouter } from "./session.router";
import { categoryRouter } from "./categories.router";
import { realEstateRouter } from "./realEstates.router";
import { scheduleRouter } from "./schedules.router";

export const routes: Router = Router()

routes.use('/users', userRouter);
routes.use('/login', sessionRouter);
routes.use('/categories', categoryRouter);
routes.use('/realEstate', realEstateRouter);
routes.use('/schedules', scheduleRouter);