SELECT make, model, year FROM vehicles
JOIN users
ON users.id = owner_id
WHERE email = $1;
