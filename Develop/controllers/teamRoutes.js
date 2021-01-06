const router = require('express').Router();
const { getFips } = require('crypto');
var path = require("path");
const { Bobby, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        res.render('home');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
    res.redirect('/profile');
    return;
    }
console.log('made it to login get')
    res.render('login');
});

router.get('/profile', withAuth, async (req, res) => {
 console.log("made it to profile")
    try {
      // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Bobby }],
    });

    const user = userData.get({ plain: true });
// res.send("this route worked")
    res.render('profile', {
        user,
        logged_in: true
    });
    } catch (err) {
    res.status(500).json(err);
    console.log(err)
    }
});

router.get('/about', async (req, res) => {
    try {
        res.render('about');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:team', async (req, res) => {
    console.log(JSON.stringify(req.params.team))
    try {
        const gifData = await Bobby.findAll({
            where: {
                team: req.params.team,
                // id: counts.reduce(function(prev, curr) {
                //     return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
                //   })
            }
        });

        const gifs = gifData.map((gif) => gif.get({ plain: true }));
        
        // res.send("it worked")
        res.render('teams', 
        { gifs
            // logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
