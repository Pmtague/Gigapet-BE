# Gigapet BE

## User endpoints: https://gigapets-be.herokuapp.com/

- POST (registration): /api/auth/register
- POST (login): /api/auth/login
- DEL (delete user by id): /api/auth/:id 
- POST (add a new child): /api/:id/new-kid
- GET (retrieve a list of children): /api/:id/kids
- POST (add a new food entry to kid by kids id): 
	/api/:id/new-entry
- GET (get food entries by kids id): /api/:id/entries