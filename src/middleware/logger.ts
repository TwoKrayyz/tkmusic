import {
    type Request,
    type Response,
    type NextFunction
} from "express";

export default function logger(request: Request, response: Response, next: NextFunction) {
    try {
        console.log(
            request.method,
            request.url,
            request.body
        );

        next();
    } catch(error) {
        console.log(error);
    }
}