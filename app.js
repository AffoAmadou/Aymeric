const path = require('path');
const product = require('./api/product');
const express = require('express')
const app = express()
const port = 3000


app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.basedir = app.get('views');


app.get('/', (req, res) => {
    res.render('pages/home', {
        title: 'Home',
      });
})

app.use('/api/product', product);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });