import "dotenv/config";
import logger from "./middleware/logger.js";
import signup from "./routes/signup.js";

import express, { type Express } from "express";
import path from "path";

const SERVER: Express = express();
const IP: string | undefined = process.env.IP;
const PORT: string | undefined = process.env.PORT;

try {
    SERVER.use(express.json());

    SERVER.use(logger);

    SERVER.post("/signup", signup);

    SERVER.use(
        express.static(
            path.join(
                import.meta.dirname,
                "../src/static"
            )
        )
    );

    SERVER.listen(PORT, () => {
        console.log(` [ LISTENING ] http://${IP}:${PORT}/`);
    });

} catch (error) {
    console.log(error);
}