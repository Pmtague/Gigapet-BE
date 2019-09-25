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

router.get('/entry/:id', (req, res) => {
  const id = req.params.id;

  Entries.findEntryById(id)
    .then(entry => {
      res.status(200).json(entry);
    })
    .catch(err => {
      console.log("findEntrybyID", err);
      res.status(500).json({ error: "Could not retrieve food entry" });
    });
});

router.delete('/entry/:id', (req, res) => {
  const { id } = req.params;

  Entries.removeEntry(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted })
      } else {
        res.status(404).json({ message: 'Na na na na na na na no entry!' })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Could not delete entry' })
    });
})

router.put('/entry/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Entries.findEntryById(id)
    .then(entry => {
      if (entry) {
        Entries.updateEntry(changes, id)
          .then(updatedEntry => {
            res.status(200).json(updatedEntry);
          })
      } else {
        res.status(404).json({ message: 'Could not find food entry with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update food entry' });
    });
})

module.exports = router;
