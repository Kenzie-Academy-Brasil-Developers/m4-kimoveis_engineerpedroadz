import 'dotenv/config'
import { LoginReturn, UserLogin } from "../interfaces/user.interface"
import { User } from "../entities";
import { userRepo } from "../repositories";
import AppError from "../errors/AppError.error";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export const loginService = async (data: UserLogin): Promise<LoginReturn> => {
    const {email} = data;
    const user : User | null = await userRepo.findOneBy({email});

    if(!user){
        throw new AppError('Invalid credentials', 401)
    }

    const comparePass = await compare(data.password, user.password)
    if(!comparePass){
        throw new AppError('Invalid credentials', 401)
    }

    const token:string = sign({email: user.email, admin: user.admin},
        process.env.SECRET_KEY!,
        {subject:user.id.toString(), expiresIn: process.env.EXPIRES_IN!})

    return {token};
}