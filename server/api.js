
import {Router} from 'express';

const router = new Router();

const express = require('express');
const {pool} = require('./db');


router.get('/', (req, res) => {
  res.json({message: 'Your Backend Service is Running'});
});

//Get all questions
router.get('/questions', function (req, res) {
  pool
    .query('SELECT * FROM questions')
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

// Create new questions
router.post('/questions', (req, res) => {
  const newId = req.body.id;
  const newTitle = req.body.title;
  const newBody = req.body.body;
  pool
    .query('SELECT * FROM questions WHERE questions.title=$1', [newId])
    .then((result) => {
      if (result.rows.length > 0) {
        return res
          .status(400)
          .send('A question with the same name already exists!');
      } else {
        const query =
          'INSERT INTO questions (id, title, body) VALUES ($1, $2, $3)';
        pool
          .query(query, [newId, newTitle, newBody])
          .then(() => res.send('Question created!'))
          .catch((e) => console.error({message: 'Your question could not be saved'}));
      }
    });
});

// Return a specific question
router.get('/questions/:id', function (req, res) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).send({message: 'Error'});
  } else {
    pool
      .query('SELECT * FROM questions WHERE id=$1', [id])
      .then((result) => res.json(result.rows))
      .catch((e) => console.error(e));
  }
});

//delete specific questions 
router.delete('/questions/:questionsId', (req, res) => {
  const id = parseInt(req.params.questionsId);
  if (isNaN(id)) {
    res.status(400).send({message: 'Question could not be deleted'});
  } else {
    pool
      .query('DELETE FROM questions WHERE id=$1', [id])
      .then(() => res.send(`204: Question ${id} deleted`))
      .catch((error) =>
        res.status(500).send({message: 'Questions could not be deleted'})
      );
  }
});

// import { Router } from "express";
// import pool from "./db";
// const router = new Router();
// const db = require("./db");
// // const customerSelectQuery = `select * from questions`;
// router.get("/", (_, res) => {
// 	// res.json({ message: "Hello, world!" });

// 	pool
// 	.query('SELECT * FROM questions;')
// 	.then((result) =>{
// 		// console.log(result.rows);
// 		res.send(result.rows)})
// 	.catch((err) => console.log(err));
	
// });




export default router;
