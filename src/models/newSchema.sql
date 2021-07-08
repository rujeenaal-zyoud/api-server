
DROP TABLE IF EXISTS clothes;

DROP TABLE IF EXISTS food;


CREATE TABLE clothes (
    id SERIAL PRIMARY KEY,
    typeIt varchar (255),
    namIt  varchar(255)
);


CREATE TABLE food (
    id SERIAL PRIMARY KEY,
    typeIt varchar (255),
     namIt  varchar(255)
);