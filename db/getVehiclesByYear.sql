SELECT users.name, vehicles.make, vehicles.model, vehicles.year FROM vehicles
JOIN users
ON users.id = owner_id
WHERE vehicles.year > 2000
ORDER BY year desc