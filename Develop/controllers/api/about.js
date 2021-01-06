const router = require('express').Router();
// const { Bobby } = require('../../views');

router.get('/', async (req, res) => {
    res.render('about'); 
    
    });

    


    module.exports = router;