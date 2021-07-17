import { Router } from "express";
import { CreateUsersControllers } from "./controllers/CreateUsersControllers";
import {CreateTagsControlles} from "./controllers/CreateTagsControlles";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUsersControllers } from "./controllers/AuthenticateUsersControllers";
import { CreateComplimentsControllers } from "./controllers/CreateComplimentsControllers";
import { ensureAutheticated } from "./middlewares/ensureAutheticated";
import { ListUserReceiverComplimentsControllers } from "./controllers/ListUserReceiverComplimentsControllers";
import { ListSendComplimentsControllers } from "./controllers/ListUserSendComplimensControllers";
import {ListTagsControllers} from "./controllers/ListTagsControllers";

const router = Router();

const createUsersControllers = new CreateUsersControllers();
const createTagsControlles = new CreateTagsControlles();
const authenticateUsersControllers = new AuthenticateUsersControllers();
const createComplimentsControllers = new CreateComplimentsControllers();
const listUserSendComplimensControllers = new ListSendComplimentsControllers();
const listUserReceiverComplimensControllers = new ListUserReceiverComplimentsControllers;
const listTagsControllers = new ListTagsControllers();

router.post("/users", createUsersControllers.handle)

router.post("/tags",ensureAutheticated, ensureAdmin, createTagsControlles.handle)

router.post("/login", authenticateUsersControllers.handle);

router.post("/compliments",ensureAutheticated, createComplimentsControllers.handle);

router.get("/users/compliments/send", ensureAutheticated, listUserSendComplimensControllers.handle);

router.get("/users/compliments/receiver", ensureAutheticated, listUserReceiverComplimensControllers.handle);

router.get("/tags/",ensureAutheticated, listTagsControllers.handle)



export { router };