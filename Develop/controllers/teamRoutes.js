const router = require('express').Router();
const { getFips } = require('crypto');
var path = require("path");
const Bobby = require('../models');


router.get('/', async (req, res) => {
    try {
        res.render('main');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:team', async (req, res) => {
    console.log(req.params.team)
    try {
        const gifData = await Bobby.findAll({
            where: {
                team: req.params.team
            },
        });
        const gifs = gifData.map((gif) => gif.get({ plain: true }));

        res.render('teams.handlebars', { ...gifs });

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
