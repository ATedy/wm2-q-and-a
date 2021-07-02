drop table if exists questions;
drop table if exists answers;
drop table if exists signup;
drop table if exists users;
CREATE TABLE questions (
  id          SERIAL PRIMARY KEY,
  title       VARCHAR(100) NOT NULL,
  body        VARCHAR(500) NOT NULL,
  tags        VARCHAR(500) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
  id                SERIAL PRIMARY KEY NOT NULL,
  name              VARCHAR(200) NOT NULL,
  email             VARCHAR(200) NOT NULL,
  password          VARCHAR(200) NOT NULL,
  UNIQUE (email)
);
INSERT INTO questions (id, title, body, tags) VALUES ('10','Why is my code not working? ', 'Please see the photo', 'hjnrkjdmf');
INSERT INTO answers (questions_id, answer_title , answer_body) VALUES ('10' ,'Hi ', 'Your code');
INSERT INTO users (name, email, password) VALUES ('Monique ',  'moniqueking57@gmail.com', 'hhhh');
INSERT INTO users (name, email, password) VALUES ('Amanuel ',  'amanueltedros@gmail.com', 'hhhh');



CREATE TABLE answers (
  answer_id              SERIAL PRIMARY KEY,
  answer_title           VARCHAR(100) NOT NULL,
  answer_body            VARCHAR(500) NOT NULL,
  questions_id    INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (questions_id) REFERENCES questions (id)
);