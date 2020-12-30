const router = require('express').Router();
var path = require("path");

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname, './views/layouts/main'));
  });

  module.exports = router;
