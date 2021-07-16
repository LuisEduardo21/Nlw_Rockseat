import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import {UsersRepositories} from "../repositories/UsersRepositories"

interface IComplimentsRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}


class CreateComplimentsServices {

    async execute({tag_id, user_sender, user_receiver, message} : IComplimentsRequest) {

        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        if(user_sender === user_receiver) {
             throw new Error("Incorrect user Reciver")
        }

        const usersRepositories = getCustomRepository(UsersRepositories);
        

        const userReceiverExists = await usersRepositories.findOne(user_receiver);

        if(!userReceiverExists) {
            throw new Error("user Receiver not found")
        }

        const compliments = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentsRepositories.save(compliments)

        return compliments;

    }

}

export {CreateComplimentsServices}