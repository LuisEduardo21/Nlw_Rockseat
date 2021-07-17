import { Request, Response, NextFunction } from "express";
import {verify} from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAutheticated(req: Request, res: Response, next: NextFunction) {

   const authToken = req.headers.authorization

   if(!authToken) {
       return res.status(401).end();
   }

   const [, token ] = authToken.split(" ")

   try {
    const { sub } = verify(token,"15bcf726073a1d62dbcf59fc864d4163") as IPayload;

    req.user_id = sub

    return next();
       
   } catch (error) {
       return res.status(401).end();
       
   }
  
    
}

