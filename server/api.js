import {Router} from "express";
import pool from "./db";
const router = new Router();

// const initializePassport = require("./passport-config");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.json({message: "Your Backend Service is Running"});
});

//signup
router.post("/signUp", async (req, res) => {
  console.log(req.body);
  const newName = req.body.name;
  const newEmail = req.body.email;
  const newPassword = req.body.password;
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  console.log(hashedPassword);

  pool
    .query("SELECT * FROM users WHERE users.email=$1", [newEmail])
    .then((result) => {
      if (result.rows.length > 0) {
        return res.status(400).send("A user with this email already exists!");
      } else {
        const query =
          "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)";
        pool
          .query(query, [newName, newEmail, hashedPassword])
          .then(() => res.send("user created!"))
          .catch((err) => console.error(err));
      }
    });
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  const newEmail = req.body.email;
  const newPassword = req.body.password;
  pool
    .query("SELECT * FROM users WHERE users.email=$1", [newEmail])
    .then(async (result) => {
      if (result.rows.length > 0) {
      //  if the email exist it will compare the password with the stored one
        let validPassword = await bcrypt.compare(
          newPassword,
          result.rows[0].password
        );
        if (validPassword) {
          console.log(result.rows);

          return res.status(200).send(result);
        } else {
          res.status(400).json({error: "Invalid Password"});
     
        }
      } else {
        res.status(401).json({error: "User does not exist"});
        
      }
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send({error: err});
    });
});

//Get all questions
router.get("/questions", function (req, res) {
  pool
    .query("SELECT * FROM questions")
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});
// Create new questions
router.post("/questions", (req, res) => {
  const newTitle = req.body.title;
  const newBody = req.body.body;
  const newTags = req.body.tags;
  pool
    .query("SELECT * FROM questions WHERE questions.title=$1", [newTitle])
    .then((result) => {
      if (result.rows.length > 0) {
        return res
          .status(400)
          .send("A question with the same name already exists!");
      } else {
        const query =
          "INSERT INTO questions ( title, body, tags) VALUES ($1, $2, $3)";
        pool
          .query(query, [newTitle, newBody, newTags])
          .then(() => res.send("Question created!"))
          .catch((e) =>
            console.error({message: "Your question could not be saved"})
          );
      }
    });
});
// Return a specific question
router.get("/questions/:id", function (req, res) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).send({message: "Error"});
  } else {
    pool
      .query("SELECT * FROM questions WHERE id=$1", [id])
      .then((result) => res.json(result.rows))
      .catch((e) => console.error(e));
  }
});
//delete specific questions
router.delete("/questions/:questionsId", (req, res) => {
  const id = parseInt(req.params.questionsId);
  if (isNaN(id)) {
    res.status(400).send({message: "Question could not be deleted"});
  } else {
    pool
      .query("DELETE FROM questions WHERE id=$1", [id])
      .then(() => res.send(`204: Question ${id} deleted`))
      .catch((error) =>
        res.status(500).send({message: "Questions could not be deleted"})
      );
  }
});
// Create new user
router.post("/answers", (req, res) => {
  const newTitle = req.body.title;
  const newBody = req.body.body;
  pool
    .query("INSERT INTO answers (title, body) VALUES ($1, $2)", [
      newTitle,
      newBody,
    ])
    .then(() => res.send("Answer created!"))
    .catch((e) => console.error({message: "Your answer could not be saved"}));
});

router.get("/answers", function (req, res) {
  pool
    .query("SELECT * FROM from answers")
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

export default router;
