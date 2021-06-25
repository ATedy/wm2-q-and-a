drop table if exists questions;
drop table if exists answers;
drop table if exists users;

CREATE TABLE questions (
  id          SERIAL PRIMARY KEY,
  title       VARCHAR(200) NOT NULL,
  body        VARCHAR(500) NOT NULL,
  tags        VARCHAR(50) NOT NULL
);

CREATE TABLE answers (
  id          SERIAL PRIMARY KEY,
  title       VARCHAR(200) NOT NULL,
  body        VARCHAR(500) NOT NULL
);


CREATE TABLE users (
  id                SERIAL PRIMARY KEY NOT NULL,
  name              VARCHAR(200) NOT NULL,
  email             VARCHAR(200) NOT NULL,
  password          VARCHAR(200) NOT NULL,
  UNIQUE (email)
  
);


INSERT INTO questions (title, body, tags) VALUES ('Why is my code not working? ', 'problem Description', 'React');
INSERT INTO questions (title, body, tags) VALUES ('Why is my code not working? ', 'problem Description', 'JS');
INSERT INTO questions (title, body, tags) VALUES ('Why is my code not working? ', 'problem Description', 'Node');
INSERT INTO questions (title, body, tags) VALUES ('Why is my code not working? ', 'problem Description', 'HTML');

INSERT INTO answers (title, body) VALUES ('Hi ', 'The problem is');
INSERT INTO answers (title, body) VALUES ('Hi ', 'The problem is');
INSERT INTO answers (title, body) VALUES ('Hi ', 'The problem is');

INSERT INTO users (name, email, password) VALUES ('Monique ',  'moniqueking57@gmail.com', '123');
INSERT INTO users (name, email, password) VALUES ('Amanuel ',  'amanueltedros@gmail.com', '1234');
INSERT INTO users (name, email, password) VALUES ('Mame',  'mame@gmail.com', '12345');
INSERT INTO users (name, email, password) VALUES ('test ',  'test@gmail.com', '123456');