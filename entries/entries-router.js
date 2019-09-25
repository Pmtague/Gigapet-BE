const router = require("express").Router();

const Entries = require("./entries-model.js");
const Kids = require("../kids/kids-model.js");

router.post("/:id/new-entry", (req, res) => {
  let newEntry = req.body;
  let id = req.params.id;

  Entries.addEntry(id, newEntry)
    .then(entry => {
      res.status(201).json(entry);
    })
    .catch(err => {
      console.log("new entry", err);
      res.status(500).json({ message: "Could not add new entry" });
    });
});

router.get("/:id/entries", (req, res) => {
  const { id } = req.params;

  Entries.findEntries(id)
    .then(entries => {
      res.status(200).json(entries);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Could not find entries" });
    });
});

module.exports = router;
