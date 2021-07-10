import { getCustomRepository } from "typeorm"
import {TagsRepositories} from "../repositories/TagsRepositories"



class CreateTagServices {

    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories)

        if(!name){
            throw new Error("Name incorrect");
        }

        const tagsAlreadyExists = await tagsRepositories.findOne({
            name
        });

        if(tagsAlreadyExists){
            throw new Error("Tag already exists")
        }

        const tags = tagsRepositories.create({
            name
        });

        await tagsRepositories.save(tags);
        return tags;

    }

}

export { CreateTagServices }