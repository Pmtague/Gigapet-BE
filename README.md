# Gigapet API

An API for a web app that gamifies healthy eating for children.

[https://gigapets-be.herokuapp.com/](https://gigapets-be.herokuapp.com/)

## User endpoints:

POST

```
Registration: /api/auth/register
```

POST

```
Login: /api/auth/login
```

DEL

```
Delete user by id: /api/auth/:id
```

POST

```
Add a new child: /api/:id/new-kid
```

GET

```
Retrieve a list of children: /api/:id/kids
```

DEL

```
Delete kid by id: /api/kid/:id
```

PUT

```
Update a kid by id: /api/kid/:id
```

POST

```
Add a new food entry to kid by kids id: /api/:id/new-entry
```

GET

```
Get food entries by kids id: /api/:id/entries
```

GET

```
Entry by entry id: /api/entry/:id
```

DEL

```
Delete entry by id): /api/entry/:id
```

PUT

```
Update an entry by entry id): /api/entry/:id
```
