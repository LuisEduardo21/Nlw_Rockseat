import {Request, Response} from "express"
import {CreateComplimentsServices} from "../services/CreateComplimentsServices"

class CreateComplimentsControllers {
    async handle(request: Request, response: Response){

       const {tag_id, user_receiver, message} = request.body;

       const { user_id } = request;

       const createComplimentsServices = new CreateComplimentsServices(); 

       const compliments = await createComplimentsServices.execute({
           tag_id, 
           user_sender: user_id, 
           user_receiver, 
           message
       })

       return response.json(compliments);
    }

}

export {CreateComplimentsControllers}