import express, { request } from 'express';
import "reflect-metadata";
import "./database";
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

//url:localhost
app.listen(3000, () => console.log("Server is running NLW"))