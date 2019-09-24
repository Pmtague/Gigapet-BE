const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model.js");
const secrets = require("./secrets.js");

router.post("/register", (req, res) => {
  let newUser = req.body;
  const hash = bcrypt.hashSync(newUser.password, 12);
  newUser.password = hash;

  Users.add(newUser)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Could not register user" });
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;
  console.log(req.body)
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: `Welcome ${user.username}!`, token, id: user.id });
      } else {
        res.status(401).json({ error: "You shall not pass!" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Unable to login" });
    });
});

router.delete('/:id', (req, res) =>{
  const { id } = req.params;
  
  Users.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({removed: deleted})
      } else {
        res.status(404).json({ message: 'Could not find user' })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Could not delete user' })
    });
});

function generateToken(user) {
  const payload = {
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
