import http from "http";

import app from "./app";
import { connectDb, disconnectDb } from "./db";

// const express = require('express');
// const {Pool} = require('pg');
// const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

const dbConfig = {
  host: 'localhost',
  port: 5432,
  user: 'moniqueking',
  password: '',
  database: 'qadata',
};

// const pool = new Pool(dbConfig);

const port = parseInt(process.env.PORT || "3000");

const server = http.createServer(app);

server.on("listening", () => {
	const addr = server.address();
	const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
	// eslint-disable-next-line no-console
	console.log(`Listening on ${bind}`);
});

app.get('/', (req, res) => {
  res.send({express: 'Your Backend Service is Running'});
});

//Get all questions
// Create new questions
//create new answers
//create new login info
//delete questions and answers
//get all open questions

process.on("SIGTERM", () => server.close(() => disconnectDb()));

connectDb().then(() => server.listen(port));
