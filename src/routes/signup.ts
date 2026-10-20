import {
    type Request,
    type Response
} from "express";

type Database = [
    {
        username: string | number,
        password: string | number
    }
];

const DATABASE: Database = [
    {
        "username": "twokrayyz",
        "password": "password"
    }
];

export default function signup(request: Request, response: Response): void {
    console.log(request.body);

    const USERNAME: string = request.body.username;
    const PASSWORD: string = request.body.password;

    if (USERNAME === DATABASE[0].username && PASSWORD === DATABASE[0].password) {
        response.json({ testing: "testing" });
    }
}