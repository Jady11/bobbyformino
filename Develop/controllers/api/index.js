const router = require('express').Router();
var path = require("path");
const teamRoutes = require('./teams');

router.use('/teams', teamRoutes);


  
// router.use('/')
module.exports = router;