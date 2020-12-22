const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
var path = require("path");

var dir = path.join(__dirname, 'public');

const { sequelize } = require('./models/index');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 5001;

// app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(dir));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => 
  console.log(`Now listening on port ${PORT}`));
});