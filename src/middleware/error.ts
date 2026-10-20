import {
    type Request,
    type Response,
    type NextFunction
} from "express";

export default function error(error: Error, request: Request, response: Response, next: NextFunction): void {
    console.error(error.stack);
    response
        .status(500)
        .send("Something broke!");

    next();
}