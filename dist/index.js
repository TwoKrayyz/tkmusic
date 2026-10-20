import logger from "./middleware/logger.js";
import "dotenv/config";
import express, {} from "express";
const SERVER = express();
const IP = process.env.IP;
const PORT = process.env.PORT;
SERVER.use(logger);
SERVER.get('/', (request, response) => {
    response.send("Hello, World!");
});
SERVER.listen(PORT, () => {
    console.log(` [ LISTENING ] http://${IP}:${PORT}/`);
});
