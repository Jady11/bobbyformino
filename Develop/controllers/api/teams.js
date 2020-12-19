const router = require('express').Router();
const Bobby = require('../../models');

router.get('/liverpool', async (req,res) => {
    res.redirect('/');
});

// router.get('tottenham', async (req, res) => {
    
// })