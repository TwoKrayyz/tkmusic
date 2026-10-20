import {
    type Request,
    type Response,
    type NextFunction
} from "express";

export default function logger(request: Request, response: Response, next: NextFunction) {
    console.log(` [ ${request.method} ] ${request.url} `);

    next();
}