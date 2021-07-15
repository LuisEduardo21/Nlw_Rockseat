import {Request, Response} from "express";
import {CreateUserService} from "../services/CreateUserService"


class CreateUsersControllers {
    async handle(resquest: Request, response: Response) {
        const {name, email, admin, password } = resquest.body;

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name, email, admin, password});

        return response.json(user);
    }

}

export {CreateUsersControllers}