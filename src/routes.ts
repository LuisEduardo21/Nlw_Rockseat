import { Router } from "express";
import { CreateUsersControllers } from "./controllers/CreateUsersControllers";
import {CreateTagsControlles} from "./controllers/CreateTagsControlles";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUsersControllers = new CreateUsersControllers();

const createTagsControlles = new CreateTagsControlles();

router.post("/users", createUsersControllers.handle)

router.post("/tags", ensureAdmin, createTagsControlles.handle)




export { router }