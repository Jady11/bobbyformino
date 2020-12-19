const router = require('express').Router();
var path = require("path");

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '../views/index.html'));
  });

  
// router.use('/')
module.exports = router;
