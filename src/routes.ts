import { Router } from "express";
import { CreateUsersControllers } from "./controllers/CreateUsersControllers";


const router = Router();

const createUsersControllers = new CreateUsersControllers();

router.post("/users", createUsersControllers.handle)





export { router }