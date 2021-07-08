
DROP TABLE IF EXISTS clothes;

DROP TABLE IF EXISTS food;


CREATE TABLE clothes (
    id SERIAL PRIMARY KEY,
    typeIt varchar (255),
    nameIt  varchar(255)
);


CREATE TABLE food (
id SERIAL PRIMARY KEY,
typeIt varchar (255),
nameIt  varchar(255)
);