UPDATE vehicles SET owner_id = null WHERE owner_id = $2 AND id = $1
RETURNING *;