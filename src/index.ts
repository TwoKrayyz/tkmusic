import logger from "./middleware/logger.js";

import "dotenv/config";

import express, {
    type Express,
    type Request,
    type Response,
    type NextFunction
} from "express";

const SERVER: Express = express();
const IP: string | undefined = process.env.IP;
const PORT: string | undefined = process.env.PORT;

SERVER.use(logger);

SERVER.get('/', (request: Request, response: Response) => {
    response.send("Hello, World!");
});

SERVER.listen(PORT, () => {
    console.log(` [ LISTENING ] http://${IP}:${PORT}/`);
});