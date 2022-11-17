import { Request, Response } from "express";
import { userRepository } from "../repositories/UserRepository";
import bcrypt from 'bcrypt';

export class UserController{
    async create(req: Request, res: Response){
        const { username, password } = req.body;

        const userExists = await userRepository.findOneBy({username})

        if(userExists){
            res.status(400).json({message: "usuário já cadastrado no sistema!"})
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = userRepository.create({
            username,
            password: hashPassword
        })
        
        await userRepository.save(newUser);

        const {password: _, ...user} = newUser;

        return res.status(201).json(user)
    }
}