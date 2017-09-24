SELECT name, make, model, year FROM vehicles
JOIN users
ON users.id = owner_id
WHERE name LIKE CONCAT('%', $1, '%');