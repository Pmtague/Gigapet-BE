# Gigapet API

An API for a web app that gamifies healthy eating for children.

[https://gigapets-be.herokuapp.com/](https://gigapets-be.herokuapp.com/)

## User endpoints:

User Auth Endpoints

```
POST
Registration: /api/auth/register

POST
Login: /api/auth/login

DEL
Delete user by id: /api/auth/:id
```

User Child Endpoints

```
POST
Add a new child: /api/:id/new-kid

GET
Retrieve a list of children: /api/:id/kids

DEL
Delete child by id: /api/kid/:id

PUT
Update a child by id: /api/kid/:id
```

Food Entry Endpoints

```
POST
Add a new food entry to child by childs id: /api/:id/new-entry

GET
Get food entries by childs id: /api/:id/entries

GET
Entry by entry id: /api/entry/:id

DEL
Delete entry by id: /api/entry/:id

PUT
Update an entry by entry id: /api/entry/:id
```
