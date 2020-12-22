const router = require('express').Router();
var path = require("path");
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;
