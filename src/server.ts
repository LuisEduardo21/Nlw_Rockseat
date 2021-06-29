import express, { request } from 'express';
import "reflect-metadata";
import "./database";

const app = express();



//url:localhost
app.listen(3000, () => console.log("Server is running NLW"))