const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
var path = require("path");
const helpers = require('./utils/helpers');

var dir = path.join(__dirname, 'public');

const { sequelize } = require('./models/index');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 5001;

const hbs = exphbs.create({ helpers });

// app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(dir));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => 
  console.log(`Now listening on port ${PORT}`));
});