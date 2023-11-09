import { User } from "../entities"
import { UserCreate, UserReadReturn, UserReturn, UserUpdate } from "../interfaces/user.interface"
import { userRepo } from "../repositories"
import { userListReturnSchema, userReturnSchema } from "../schemas/user.schema";

export const createUserService = async (data: UserCreate): Promise<UserReturn> =>{

    const user: User = userRepo.create(data);

    await userRepo.save(user);

    return userReturnSchema.parse(user);
}

export const readUsersService = async (): Promise<UserReadReturn> =>{
    const userList: User[] = await userRepo.find();

    return userListReturnSchema.parse(userList);
}

export const userUpdateService = async (data: UserUpdate, user: User): Promise<UserReturn> =>{
    const userUpdated =  userRepo.create({... user, ...data})
    await userRepo.save(userUpdated)
    
    return userReturnSchema.parse(userUpdated);
}

export const deleteUserService = async (user: User) =>{
    await userRepo.softRemove(user);
}
