const router = require('express').Router();
const Bobby = require('../../models');

router.get('/', async (req, res) => {
    try {
        const gifData = await Bobby.findAll();
        // res.send(gifData)
        res.status(200).json(gifData);
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
        })
        // const gifs = gifData.map((gif) => gif.get({plain: true}));
        // res.render('main',{
        //     gifs
        // });
        res.status(200).json(gifData)
    } catch {
        res.status(500).json(err);
    }
})

router.post('/', async (req,res) => {

})


module.exports = router;