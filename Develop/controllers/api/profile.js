const router = require('express').Router();
// const { Bobby } = require('../../views');

router.get('/', async (req, res) => {
    res.render('profile'); 
    
    });

    


    module.exports = router;