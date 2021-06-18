import { Router } from "express";
import pool from "./db";
const router = new Router();
const db = require("./db");
// const customerSelectQuery = `select * from questions`;
router.get("/", (_, res) => {
	// res.json({ message: "Hello, world!" });

	pool
	.query('SELECT * FROM questions;')
	.then((result) =>{
		// console.log(result.rows);
		res.send(result.rows)})
	.catch((err) => console.log(err));
	
});





export default router;
