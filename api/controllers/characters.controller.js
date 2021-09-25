const Character = require("../../models/character");

module.exports = {
  /* Get all characters */
  charactersIndex(req, res) {
    Character.findAll({
      attributes: ['image', 'name']
    })
      .then((chars) => {
        res.status(200).json(chars);
      })
      .catch((err) => console.log(err));
  },

  /* Add a character */
  charactersAdd(req, res) {
    let { image, name, age, weight, history } = req.body;

    // Insert into table
    Character.create({
      image,
      name,
      age,
      weight,
      history,
    })
      .then((newChar) => res.json({
        ok: true,
        newChar

      }))
      .catch((err) => res.status(500).json({
        ok: false,
        err: err.errors[0].message
      }));
  },

  /* Edit a character */
  async charactersEdit(req, res) {
    let id = req.params.id;
    let { image, name, age, weight, history } = req.body;

    
    let charToEdit = await Character.findOne({ where: { id } });

    if (!charToEdit) {
      return res.status(400).json({
        ok: false,
        error: `Character with id ${id} not found`
      })
    }

    charToEdit.name = name || charToEdit.name;
    charToEdit.age = age || charToEdit.age;
    charToEdit.weight = weight || charToEdit.weight;
    charToEdit.image = image || charToEdit.image;
    charToEdit.history = history || charToEdit.history;

    await charToEdit.save();
    res.json({
      ok: true,
      charToEdit
    })
  },

  /* Delete a character */
  async charactersDelete(req, res) {
    let id = req.params.id;

    let charToDelete = await Character.destroy({
      where: {
        id,
      },
    });

    if (!charToDelete) {
      return res.status(400).json({
        ok: false,
        error: `Character with id ${id} not found`
      })
    }

    res.json({
      ok: true,
      message: `Character with id ${id} deleted succesfully`
    })
  },
};
