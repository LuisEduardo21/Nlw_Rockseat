import { Router } from "express";
import { CreateUsersControllers } from "./controllers/CreateUsersControllers";
import {CreateTagsControlles} from "./controllers/CreateTagsControlles";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUsersControllers } from "./controllers/AuthenticateUsersControllers";
import { CreateComplimentsControllers } from "./controllers/CreateComplimentsControllers";

const router = Router();

const createUsersControllers = new CreateUsersControllers();
const createTagsControlles = new CreateTagsControlles();
const authenticateUsersControllers = new AuthenticateUsersControllers();
const createComplimentsControllers = new CreateComplimentsControllers();

router.post("/users", createUsersControllers.handle)

router.post("/tags", ensureAdmin, createTagsControlles.handle)

router.post("/login", authenticateUsersControllers.handle);

router.post("/compliments", createComplimentsControllers.handle);



export { router };