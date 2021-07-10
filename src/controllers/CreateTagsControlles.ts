import {Request, Response} from "express"
import {CreateTagServices} from "../services/CreateTagServices"


class CreateTagsControlles {
    async handle(request: Request, response:Response){
        const { name } = request.body
        const createTagServices = new CreateTagServices();

        const tags = await createTagServices.execute(name)

        return response.json(tags)
    }

}

export {CreateTagsControlles}