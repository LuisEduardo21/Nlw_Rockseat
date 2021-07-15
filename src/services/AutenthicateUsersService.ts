import { getCustomRepository} from "typeorm"
import {UsersRepositories} from "../repositories/UsersRepositories"
import { compare } from "bcryptjs"
import { sign} from "jsonwebtoken"

interface IAuthenticateUsersService {
    email: string,
    password: string
}


class AuthenticateUsersService {
    async execute({email, password}:IAuthenticateUsersService) {
         const usersRepositories = getCustomRepository(UsersRepositories)

         const userExists = await usersRepositories.findOne ({
             email
         });

         if(!userExists) {
             throw new Error("Email/Password incorrect");
             
         }

        const passwordMatch = await compare(password, userExists.password);

        if(!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        const token = sign({
            email: userExists.email,
        }, "15bcf726073a1d62dbcf59fc864d4163", 
        {
            subject: userExists.id,
            expiresIn: "5d"
        }
        );

        return token;

    }

}

export {AuthenticateUsersService}