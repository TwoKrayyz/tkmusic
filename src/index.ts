import "dotenv/config";
import logger from "./middleware/logger.js";
import signup from "./routes/signup.js";
import error from "./middleware/error.js";

import express from "express";
import path from "path";

try {
    const server = express();
    const IP = process.env.IP || "127.0.0.1";
    const PORT = process.env.PORT || 3000;

    server.use(express.json());

    server.use(error, logger);

    server.post("/signup", signup);

    server.use(
        express.static(
            path.join(
                import.meta.dirname,
                "../src/static"
            )
        )
    );

    server.listen(PORT, () => {
        console.log(` [ LISTENING ] http://${IP}:${PORT}/`);
    });

} catch (error) {
    console.log(error);
}