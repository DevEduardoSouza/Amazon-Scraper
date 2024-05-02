import express from "express";
import routes from "./routes/routes.js";
import { connection } from "./db/connection.js";

const app = express();

app.use(express.json());

app.use(routes);

// If used database
// connection();

export default app;
