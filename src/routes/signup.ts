import {
    type Request,
    type Response
} from "express";

export default function signup(request: Request, response: Response): void {
    console.log(request.body);

    response.json({ "message": "hello, world!" });
}