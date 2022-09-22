-- CLAUSULA SELECT 

SELECT * FROM categories; 
-- TRAE TODO DE LA TABLA categories
SELECT CompanyName, ContactName, City FROM customers;
-- TRAE LOS CAMPOS CompanyName, ContactName, City DE LA TABLA customers
SELECT distinct City FROM customers;
-- TRAE LOS CAMPOS City DE LA TABLA customers SIN REPETIR
SELECT count(distinct Country) FROM customers;
-- TRAE LA CANTIDAD DE PAISES DIFERENTES DE LA TABLA customers

-- CLAUSULA WHERE 
SELECT * FROM categories WHERE id = 1;
-- TRAE TODO DE LA TABLA categories DONDE EL ID SEA IGUAL A 1
SELECT * FROM costumers WHERE Country = 'Mexico';
-- TRAE TODO DE LA TABLA costumers DONDE EL PAIS SEA IGUAL A Mexico
SELECT * FROM products WHERE UnitPrice > 20;
-- TRAE TODO DE LA TABLA products DONDE EL UnitPrice SEA MAYOR A 20
SELECT * FROM products WHERE UnitPrice <> 20;
-- TRAE TODO DE LA TABLA products DONDE EL UnitPrice SEA DIFERENTE A 20
SELECT * FROM products WHERE UnitPrice BETWEEN 10 AND 20;
-- TRAE TODO DE LA TABLA products DONDE EL UnitPrice SEA ENTRE 10 Y 20
SELECT * FROM products WHERE UnitPrice NOT BETWEEN 10 AND 20;
-- TRAE TODO DE LA TABLA products DONDE EL UnitPrice NO SEA ENTRE 10 Y 20
SELECT * FROM costumers WHERE Country = 'Mexico' AND City = 'Mexico';
-- TRAE TODO DE LA TABLA costumers DONDE EL PAIS SEA IGUAL A Mexico Y LA CIUDAD SEA IGUAL A Mexico
SELECT * FROM costumers WHERE Country = 'Mexico' OR City = 'Mexico';
-- TRAE TODO DE LA TABLA costumers DONDE EL PAIS SEA IGUAL A Mexico O LA CIUDAD SEA IGUAL A Mexico
SELECT * FROM costumers WHERE Country IN ('Mexico', 'USA');
-- TRAE TODO DE LA TABLA costumers DONDE EL PAIS SEA IGUAL A Mexico O USA
SELECT * FROM costumers WHERE Country NOT IN ('Mexico', 'USA');
-- TRAE TODO DE LA TABLA costumers DONDE EL PAIS NO SEA IGUAL A Mexico O USA
SELECT * FROM costumers WHERE Country LIKE 'M%';
-- TRAE TODO DE LA TABLA costumers DONDE EL PAIS EMPIECE CON M
SELECT * FROM costumers WHERE Country LIKE '%a' ORDER BY Country DESC;
-- TRAE TODO DE LA TABLA costumers DONDE EL PAIS TERMINE CON a ORDENADO DE MANERA DESCENDENTE
SELECT * FROM costumers WHERE Country LIKE '%a' ORDER BY Country ASC, City DESC;
-- TRAE TODO DE LA TABLA costumers DONDE EL PAIS TERMINE CON a ORDENADO DE MANERA ASCENDENTE Y LA CIUDAD DE MANERA DESCENDENTE


-- CLAUSULA INSERT

INSERT INTO categories (name) VALUES ('Bebidas');
-- INSERTA UNA CATEGORIA CON EL NOMBRE Bebidas
INSERT INTO categories (name, UnitPrice) VALUES ('Bebidas', 4), ('Lacteos', 0);
-- INSERTA DOS CATEGORIAS CON EL NOMBRE Bebidas Y Lacteos

-- CLAUSULA UPDATE
UPDATE categories SET name = 'Bebidas' WHERE id = 1;
-- ACTUALIZA EL NOMBRE DE LA CATEGORIA CON ID 1 A Bebidas

-- CLAUSULA DELETE
DELETE FROM categories WHERE id = 1;
-- ELIMINA LA CATEGORIA CON ID 1

-- CLAUSULA TOP
SELECT TOP 5 * FROM costumers;
-- TRAE LOS PRIMEROS 5 REGISTROS DE LA TABLA costumers

-- CLAUSULA LIMIT
SELECT * FROM costumers LIMIT 5;
-- TRAE LOS PRIMEROS 5 REGISTROS DE LA TABLA costumers

-- CLAUSULA OFFSET
SELECT * FROM costumers LIMIT 5 OFFSET 5;
-- TRAE LOS REGISTROS DE LA TABLA costumers DESDE EL 5 HASTA EL 10

-- CLAUSULA MIN Y MAX 
SELECT MIN(UnitPrice) FROM products;
-- TRAE EL PRECIO MINIMO DE LA TABLA products

SELECT MAX(UnitPrice) FROM products;
-- TRAE EL PRECIO MAXIMO DE LA TABLA products

-- COUNT AVG SUM 
SELECT COUNT(*) FROM products;
-- TRAE LA CANTIDAD DE REGISTROS DE LA TABLA products

SELECT AVG(UnitPrice) FROM products;
-- TRAE EL PRECIO PROMEDIO DE LA TABLA products

SELECT SUM(UnitPrice) FROM products;
-- TRAE LA SUMA DE LOS PRECIOS DE LA TABLA products

-- CLAUSULA LIKE 
SELECT * FROM costumers WHERE Country LIKE 'M%';
-- TRAE TODO DE LA TABLA costumers DONDE EL PAIS EMPIECE CON M
SELECT * FROM costumers WHERE Country LIKE '%a';
-- TRAE TODO DE LA TABLA costumers DONDE EL PAIS TERMINE CON a
SELECT * FROM costumers WHERE Country LIKE '%a%';
-- TRAE TODO DE LA TABLA costumers DONDE EL PAIS CONTENGA a
SELECT * FROM costumers WHERE Country LIKE '_a%';
-- TRAE TODO DE LA TABLA costumers DONDE EL PAIS TENGA UNA LETRA Y LUEGO UN a
SELECT * FROM costumers WHERE Country LIKE 'M__%';
-- TRAE TODO DE LA TABLA costumers DONDE EL PAIS EMPIECE CON M Y TENGA 3 LETRAS

-- CLAUSULA BETWEEN
SELECT * FROM products WHERE UnitPrice BETWEEN 10 AND 20;
-- TRAE TODO DE LA TABLA products DONDE EL UnitPrice SEA ENTRE 10 Y 20

-- CLAUSULA IN
SELECT * FROM costumers WHERE Country IN ('Mexico', 'USA'); 
-- TRAE TODO DE LA TABLA costumers DONDE EL PAIS SEA IGUAL A Mexico O USA. Forma corta del operador OR.

-- CLAUSULA NOT IN
SELECT * FROM costumers WHERE Country NOT IN ('Mexico', 'USA');
-- TRAE TODO DE LA TABLA costumers DONDE EL PAIS NO SEA IGUAL A Mexico O USA.

-- CLAUSULA DISTINCT
SELECT distinct City FROM customers;
-- TRAE LOS CAMPOS City DE LA TABLA customers SIN REPETIR

-- CLAUSULA AS 
SELECT id AS ID, name AS NOMBRE FROM categories;
-- TRAE LOS CAMPOS id Y name DE LA TABLA categories RENOMBRANDO id A ID Y name A NOMBRE

-- CLAUSULA CONCAT 
SELECT CONCAT(name, ', PRECIO : ', UnitPrice) AS NOMBRE FROM products;
-- TRAE LOS CAMPOS name Y UnitPrice DE LA TABLA products CONCATENANDO name Y UnitPrice

-- CLAUSULA CONCAT_WS
SELECT CONCAT_WS(' - ', name, UnitPrice) AS NOMBRE FROM products;
-- TRAE LOS CAMPOS name Y UnitPrice DE LA TABLA products CONCATENANDO name Y UnitPrice CON UN GUION

-- CLAUSULA JOINS
-- INNER JOIN = Trae los registros que coincidan en ambas tablas
SELECT * FROM products INNER JOIN categories ON products.category_id = categories.id;
-- LEFT JOIN = Trae todos los registros de la tabla de la izquierda y los registros que coincidan en la tabla de la derecha
SELECT * FROM products LEFT JOIN categories ON products.category_id = categories.id;
-- RIGHT JOIN = Trae todos los registros de la tabla de la derecha y los registros que coincidan en la tabla de la izquierda
SELECT * FROM products RIGHT JOIN categories ON products.category_id = categories.id;
-- FULL JOIN = Trae todos los registros de ambas tablas
SELECT * FROM products FULL JOIN categories ON products.category_id = categories.id;

-- CLAUSULA SELF JOIN
SELECT * FROM costumers AS c1, costumers AS c2 WHERE c1.id <> c2.id AND c1.City = c2.City;
-- TRAE LOS REGISTROS DE LA TABLA costumers QUE NO SEAN IGUALES Y QUE TENGAN LA MISMA CIUDAD

-- CLAUSULA UNION
SELECT name FROM categories UNION SELECT name FROM products;
-- TRAE LOS REGISTROS DE LA TABLA categories Y LA TABLA products SIN REPETIR

-- CLAUSULA UNION ALL
SELECT name FROM categories UNION ALL SELECT name FROM products;
-- TRAE LOS REGISTROS DE LA TABLA categories Y LA TABLA products REPETIDOS

-- CLAUSULA GROUP BY
SELECT City, COUNT(*) AS CANTIDAD FROM costumers GROUP BY City;
-- TRAE LOS REGISTROS DE LA TABLA costumers AGRUPADOS POR CIUDAD Y CUENTA LA CANTIDAD DE REGISTROS POR CIUDAD

-- CLAUSULA HAVING
SELECT City, COUNT(*) AS CANTIDAD FROM costumers GROUP BY City HAVING COUNT(*) > 1;
-- TRAE LOS REGISTROS DE LA TABLA costumers AGRUPADOS POR CIUDAD Y CUENTA LA CANTIDAD DE REGISTROS POR CIUDAD Y SOLO TRAE LAS CIUDADES CON MAS DE 1 REGISTRO

-- CLAUSULA EXISTS
SELECT * FROM costumers WHERE EXISTS (SELECT * FROM orders WHERE costumers.id = orders.customer_id);
-- TRAE LOS REGISTROS DE LA TABLA costumers QUE TIENEN REGISTROS EN LA TABLA orders

-- CLAUSULA NOT EXISTS
SELECT * FROM costumers WHERE NOT EXISTS (SELECT * FROM orders WHERE costumers.id = orders.customer_id);
-- TRAE LOS REGISTROS DE LA TABLA costumers QUE NO TIENEN REGISTROS EN LA TABLA orders

-- CLAUSULA INSERT INTO
INSERT INTO costumers (name, address, city, state, zip, country) VALUES ('Juan', 'Calle 1', 'Mexico', 'DF', '12345', 'Mexico');
-- INSERTA UN REGISTRO EN LA TABLA costumers

-- SQL CASE
SELECT name,
CASE
WHEN UnitPrice > 20 THEN 'Caro'
WHEN UnitPrice < 10 THEN 'Barato'
ELSE 'Normal'
END AS PRECIO
FROM products;
-- TRAE LOS REGISTROS DE LA TABLA products Y LE AGREGA UNA COLUMNA LLAMADA PRECIO QUE DICE SI EL PRECIO ES CARO, BARATO O NORMAL

-- SQL IF
SELECT name,
IF(UnitPrice > 20, 'Caro', 'Barato') AS PRECIO
FROM products;

-- SQL IFNULL
SELECT name, IFNULL(UnitPrice, 'Sin precio') AS PRECIO
FROM products;

-- SQL ISNULL
SELECT name, ISNULL(UnitPrice, 'Sin precio') AS PRECIO
FROM products;

-- CREATE PROCEDURE 
CREATE PROCEDURE sp_getCostumers
AS
BEGIN
SELECT * FROM costumers;
END;
GO
-- CREA UNA PROCEDIMIENTO ALMACENADO LLAMADO sp_getCostumers

-- EXECUTE PROCEDURE
EXECUTE sp_getCostumers;
-- EJECUTA EL PROCEDIMIENTO ALMACENADO sp_getCostumers

-- CREATE PROCEDURE WITH PARAMS
CREATE PROCEDURE sp_getCostumersByCountry
@country VARCHAR(50)
AS
BEGIN
SELECT * FROM costumers WHERE country = @country;
END;
GO
-- CREA UNA PROCEDIMIENTO ALMACENADO LLAMADO sp_getCostumersByCountry CON UN PARAMETRO LLAMADO @country

-- EXECUTE PROCEDURE WITH PARAMS
EXECUTE sp_getCostumersByCountry 'Mexico';
-- EJECUTA EL PROCEDIMIENTO ALMACENADO sp_getCostumersByCountry CON EL PARAMETRO @country = 'Mexico'

-- DROP TABLE 
DROP TABLE costumers;
-- ELIMINA LA TABLA costumers

TRUNCATE TABLE costumers;
-- ELIMINA TODOS LOS REGISTROS DE LA TABLA costumers

-- CONSTRAINTS
-- NOT NULL
-- UNIQUE
-- PRIMARY KEY
-- FOREIGN KEY
-- CHECK
-- DEFAULT

-- CREATE TABLE WITH CONSTRAINTS
CREATE TABLE costumers (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
address VARCHAR(50) NOT NULL,
city VARCHAR(50) NOT NULL,
state VARCHAR(50) NOT NULL,
zip VARCHAR(50) NOT NULL,
country VARCHAR(50) NOT NULL,
CONSTRAINT PK_costumers PRIMARY KEY (id)
);
GO
-- CREA LA TABLA costumers CON UNA CONSTRAINT LLAMADA PK_costumers QUE ES UNA PRIMARY KEY


















