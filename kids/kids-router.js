const router = require("express").Router();
const restricted = require("../auth/restricted-middleware");

const Kids = require("../kids/kids-model.js");
const Users = require("../users/users-model.js");

// Add new child to user(parent or guardian) account
router.post("/:id/new-kid", (req, res) => {
  let newKid = req.body;
  let id = req.params.id;

  Kids.addKids(id, newKid)
    .then(kid => {
      res.status(201).json(kid);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Could not add new kid" });
    });
});

// Retrieve all children for a specific user
router.get("/:id/kids", validateParentId, (req, res) => {
  const { id } = req.params;
  console.log("Get kids", req.params);
  Kids.findKids(id)
    .then(kids => {
      res.status(200).json(kids);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Could not find kids" });
    });
});

// Retrieve a specific child
router.get("/kid/:id", restricted, (req, res) => {
  const id = req.params.id;
  //   console.log("kid", req.headers)

  Kids.findKidById(id)
    .then(kid => {
      res.status(200).json(kid);
    })
    .catch(err => {
      console.log("findKidbyID", err);
      res.status(500).json({ error: "Could not retrieve kid" });
    });
});

// Delete a child from a user account
router.delete("/kid/:id", restricted, (req, res) => {
	const { id } = req.params;
  
	Kids.remove(id)
	  .then(deleted => {
		if (deleted) {
		  res.json({ removed: deleted });
		} else {
		  res.status(404).json({ error: "No kid" });
		}
	  })
	  .catch(err => {
		console.log(err);
		res.status(500).json({ error: "Could not delete kid" });
	  });
  });  

// Custom Middleware

function validateParentId(req, res, next) {
  const id = req.params.id;
  console.log("parent validation", req.params);

  Users.findById(id)
    .then(user => {
      if (user) {
        next();
      } else {
        res.status(404).json({ error: "This ain't yo kid" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Could not retrieve user" });
    });
}


module.exports = router;
