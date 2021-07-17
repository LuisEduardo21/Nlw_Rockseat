import {Request, Response} from "express"
import {ListTagsServices} from "../services/ListTagsServices"


class ListTagsControllers {
    async handle(req: Request, response: Response){
        const listTagsServices = new ListTagsServices();

        const tags = await listTagsServices.execute();

        return response.json(tags);
    }

}

export{ ListTagsControllers}