-- 8 kyu
-- On the Canadian Border (SQL for Beginners #2)
-- https://www.codewars.com/kata/590ba881fe13cfdcc20001b4

-- DESCRIPTION:
-- You are a border guard sitting on the Canadian border. 
-- You were given a list of travelers who have arrived at your gate today. 
-- You know that American, Mexican, and Canadian citizens don't need visas, so they can just continue their trips. 
-- You don't need to check their passports for visas! You only need to check the passports of citizens of all other countries!

-- Select names, and countries of origin of all the travelers, excluding anyone from Canada, Mexico, or The US.

-- travelers table schema:
-- name
-- country
-- NOTE: The United States is written as 'USA' in the table.

SELECT *
FROM travelers
WHERE country NOT IN ('USA','Mexico','Canada');
