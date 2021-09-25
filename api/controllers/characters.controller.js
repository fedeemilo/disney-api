const db = require('../../config/database')
const { errServer, errRequest } = require("../../utils/errors")
const Character = db.Character;

module.exports = {
    /* Get all characters (name & image) */
    async charactersIndex(req, res) {
        let queryEmpty = Object.entries(req.query).length === 0

        if (!queryEmpty) {
            // handle search by query
            let charSearch = await Character.findAll({
                where: req.query
            })

            if (charSearch.length === 0) {
                return errRequest(res, `User not found`)
            }

            return res.json({
                ok: true,
                charSearch: result
            })
        } else {
            // handle return all characters
            Character.findAll({
                attributes: ["image", "name"]
            })
                .then((chars) => {
                    res.status(200).json(chars)
                })
                .catch((err) =>
                    errServer(res, err)
                )
        }
    },

    /* Get character by ID */
    async characterById(req, res) {
        let id = req.params.id

        try {
            let charById = await Character.findOne({ where: { id } })

            if (!charById) {
                errRequest(res, `Character with ${id} not found`)
            }

            res.status(200).json({
                ok: true,
                character: charById
            })
        } catch (error) {
            console.error(error)
            errServer(res, error)
        }
    },

    /* Add a character */
    charactersAdd(req, res) {
        let { image, name, age, weight, history } = req.body

        // Insert into table
        Character.create({
            image,
            name,
            age,
            weight,
            history
        })
            .then((newChar) =>
                res.status(200).json({
                    ok: true,
                    newChar
                })
            )
            .catch((err) => errServer(res, err))
    },

    /* Edit a character */
    async charactersEdit(req, res) {
        let id = req.params.id
        let { image, name, age, weight, history } = req.body

        try {
            let charToEdit = await Character.findOne({
                where: { id }
            })

            if (!charToEdit) {
                errRequest(res, `Character with id ${id} not found`)
            }

            charToEdit.name = name || charToEdit.name
            charToEdit.age = age || charToEdit.age
            charToEdit.weight = weight || charToEdit.weight
            charToEdit.image = image || charToEdit.image
            charToEdit.history = history || charToEdit.history

            await charToEdit.save()
            res.status(200).json({
                ok: true,
                charToEdit
            })
        } catch (error) {
            console.error(error)
            errServer(res, error)
        }
    },

    /* Delete a character */
    async charactersDelete(req, res) {
        let id = req.params.id

        try {
            let charToDelete = await Character.destroy({
                where: {
                    id
                }
            })

            if (!charToDelete) {
                errRequest(res, `Character with id ${id} not found`)
            }

            res.status(200).json({
                ok: true,
                message: `Character with id ${id} deleted succesfully`
            })
        } catch (error) {
            console.error(error)
            errServer(res, error)
        }
    }
}
