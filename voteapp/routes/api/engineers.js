// call express, express router, const keys require keys
const express = require('express')
const router = express.Router()
const keys = require("../../config/keys")
const Engineer = require('../../models/engineers');

router.post('/createEngineers', (req, res) => {
    const engineersArray = req.body
    for (var i = 0; i < engineersArray.length; i++) {
        const newEngineer = new Engineer({
            name: engineersArray[i].name,
            image_url: engineersArray[i].image_url,
            title: engineersArray[i].title,
            bio: engineersArray[i].bio
        })
        newEngineer.save();
    }
})

router.get('/engineers', (req, res) => res.json({ msg: "posts Works" }));

module.exports = router;