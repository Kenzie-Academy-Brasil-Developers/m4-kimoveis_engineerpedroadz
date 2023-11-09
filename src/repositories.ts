import { Repository } from "typeorm";
import Category from "./entities/Category.entity";
import { AppDataSource } from "./data-source";
import RealEstate from "./entities/RealEstate.entity";
import Address from "./entities/Address.entity";
import User from "./entities/User.entity";
import Schedule from "./entities/Schedule.entity";
import { ScheduleRepo } from "./interfaces/schedule.interface";
import { AddressRepo, RealEstateRepo } from "./interfaces/realEstate.interface";
import { CategoryRepo } from "./interfaces/category.interface";
import { UserRepo } from "./interfaces/user.interface";

export const categoryRepo : CategoryRepo = AppDataSource.getRepository(Category);
export const addressRepo : AddressRepo = AppDataSource.getRepository(Address);
export const userRepo : UserRepo = AppDataSource.getRepository(User);
export const realEstateRepo : RealEstateRepo = AppDataSource.getRepository(RealEstate);
export const scheduleRepo : ScheduleRepo = AppDataSource.getRepository(Schedule);