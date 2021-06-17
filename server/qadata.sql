drop table if exists questions;
drop table if exists answers;
drop table if exists signup;

CREATE TABLE questions (
  id          SERIAL PRIMARY KEY,
  title       VARCHAR(50) NOT NULL,
  body        VARCHAR(50) NOT NULL
);

CREATE TABLE answers (
  id          SERIAL PRIMARY KEY,
  title       VARCHAR(50) NOT NULL,
  body        VARCHAR(50) NOT NULL
);

CREATE TABLE signup (
  id          SERIAL PRIMARY KEY,
  first_name       VARCHAR(50) NOT NULL,
  second_name        VARCHAR(50) NOT NULL,
  email           VARCHAR(50) NOT NULL
);


INSERT INTO questions (id, title, body) VALUES ('3','Never ', '24');

INSERT INTO answers (id, title, body) VALUES ('3','Hi ', '25');

INSERT INTO signup (id, first_name, second_name, email) VALUES ('1','Monique ', 'King', 'moniqueking57@gmail.com');
INSERT INTO signup (id, first_name, second_name, email) VALUES ('2','Amanuel ', 'Tedros', 'amanueltedros@gmail.com');