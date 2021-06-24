drop table if exists questions;
drop table if exists answers;
drop table if exists signup;
drop table if exists users;

CREATE TABLE questions (
  id          SERIAL PRIMARY KEY,
  title       VARCHAR(100) NOT NULL,
  body        VARCHAR(500) NOT NULL,
  tags        VARCHAR(50) NOT NULL
);

CREATE TABLE answers (
  id          SERIAL PRIMARY KEY,
  title       VARCHAR(100) NOT NULL,
  body        VARCHAR(500) NOT NULL
);

-- CREATE TABLE signup (
--   id          SERIAL PRIMARY KEY,
--   first_name       VARCHAR(50) NOT NULL,
--   second_name        VARCHAR(50) NOT NULL,
--   email           VARCHAR(50) NOT NULL
-- );

CREATE TABLE users (
  id                SERIAL PRIMARY KEY NOT NULL,
  name              VARCHAR(200) NOT NULL,
  email             VARCHAR(200) NOT NULL,
  password          VARCHAR(200) NOT NULL,
  UNIQUE (email)
  
);


INSERT INTO questions (id, title, body) VALUES ('1','Why is my code not working? ', 'Please see the photo');

INSERT INTO answers (id, title, body) VALUES ('1','Hi ', 'Your code');

INSERT INTO users (id, name, email, password) VALUES ('1','Monique ',  'moniqueking57@gmail.com', 'hhhh');
INSERT INTO users (id, name, email, password) VALUES ('2','Amanuel ',  'amanueltedros@gmail.com', 'hhhh');