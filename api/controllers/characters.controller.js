const Character = require("../../models/character");

module.exports = {
  /* Get all characters */
  charactersIndex(req, res) {
    Character.findAll()
      .then((chars) => {
        console.log(chars);
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
      .then((char) => res.redirect("/characters"))
      .catch((err) => console.log(err));
  },

  /* Edit a character */
  async charactersEdit(req, res) {
    let id = req.params.id;
    let { image, name, age, weight, history } = req.body;
    let characterEdit = await Character.findOne({ where: { id } });

    characterEdit.name = name || characterEdit.name;
    characterEdit.age = age || characterEdit.age;
    characterEdit.weight = weight || characterEdit.weight;
    characterEdit.image = image || characterEdit.image;
    characterEdit.history = history || characterEdit.history;

    await characterEdit.save();
    res.redirect("/characters");
  },

  /* Delete a character */
  async charactersDelete(req, res) {
    let id = req.params.id;

    await Character.destroy({
      where: {
        id,
      },
    });

    res.redirect("/characters");
  },
};
