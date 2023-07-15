import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import Server from "./models/Server.js";

const server = new Server();
dotenv.config();
server.listenner();
conectarDB();

