const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const route = require('./routes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3000;

//Static file
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
