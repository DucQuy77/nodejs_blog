const path = require('path');
const express = require('express');
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))
//HTTP Logger
// app.use(morgan('Combined'))

app.use(express.urlencoded())
app.use(express.json())

//Templete Engine
app.engine('hbs', engine({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})