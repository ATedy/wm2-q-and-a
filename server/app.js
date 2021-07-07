import express from "express";
import morgan from "morgan";
import path from "path";

import router from "./api";
import { configuredHelmet, httpsOnly, logErrors, pushStateRouting } from "./middleware";

const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const apiRoot = "/api";
const staticDir = path.join(__dirname, "static");

const app = express();
// app.use(cors({
// 	origin: "https://localhost:3000",
// 	credentials: true
// }))

// app.use(session({
// 	secret: "secretcode",
// 	resave: true,
// 	saveUninitalized: true
// }));

// app.use(cookieParser("secertcode"))

app.use(express.json()); 
app.use(configuredHelmet());
app.use(logErrors());
app.use(morgan("dev"));

if (app.get("env") === "production") {
	app.enable("trust proxy");
	app.use(httpsOnly());
}

app.use(apiRoot, router);


app.use(express.static(staticDir));
app.use(pushStateRouting(apiRoot, staticDir));

export default app;
