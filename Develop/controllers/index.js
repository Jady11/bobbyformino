const router = require('express').Router();
var path = require("path");
const apiRoutes = require('./api');
const teamRoutes = require('./teamRoutes');

router.use('/api', apiRoutes);
router.use('/', teamRoutes);



module.exports = router;
