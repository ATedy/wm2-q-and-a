-- DB - q-a 

-- psql -d q_a -f users.sql
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id                SERIAL PRIMARY KEY NOT NULL,
  name              VARCHAR(200) NOT NULL,
  email             VARCHAR(200) NOT NULL,
  password          VARCHAR(200) NOT NULL,
  UNIQUE (email)
  
);
