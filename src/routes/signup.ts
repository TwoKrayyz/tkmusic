import {
    type Request,
    type Response
} from "express";

const database = [
    {
        "username": "twokrayyz",
        "password": "password"
    }
];

export default function signup(request: Request, response: Response): void {
    console.log(request.body);

    const username = request.body.username;
    const password = request.body.password;

    if (username === database[0]?.username && password === database[0]?.password) {
        response.json({ "message": "hello, world!" });
    } else {
        return;
    }
}