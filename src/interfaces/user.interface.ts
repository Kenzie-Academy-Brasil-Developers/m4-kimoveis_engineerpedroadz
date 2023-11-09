import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { Schedule, User } from "../entities";
import { createUserSchema, userLoginSchema, userReturnSchema } from "../schemas/user.schema";

export type UserCreate = z.infer<typeof createUserSchema>;
export type UserBodyUpdate = Omit<UserCreate, 'admin'>;
export type UserUpdate = DeepPartial<UserBodyUpdate>;
export type UserRepo = Repository<User>;
export type UserReturn = z.infer<typeof userReturnSchema>
export type UserLogin = z.infer<typeof userLoginSchema>
export type LoginReturn = {token: string}
export type UserReadReturn = UserReturn[]



