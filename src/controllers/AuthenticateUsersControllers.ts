import {Request, Response} from "express"
import {AuthenticateUsersService} from "../services/AutenthicateUsersService"


class AuthenticateUsersControllers {
    async handle(request: Request, response: Response){
        const{email, password} = request.body

        const authenticateUsersService = new AuthenticateUsersService();

        const token = await authenticateUsersService.execute({
            email,
            password
        })

        return response.json(token)
    }

}


export {AuthenticateUsersControllers}