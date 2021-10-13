const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Nueva ruta');
});

routerApi(app);



app.get('/home', (req, res) => {
  res.send('home');
 });

app.get('/users', (req, res) => {
  const {limit, offset} = req.query;
  if(limit && offset) {
    res.json({
      limit,
       offset
      });
  } else {
    res.send('No hay parametros');
  }

})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  })
})

app.get('/user/:userId/', (req, res) => {
  const {userId} = req.params;
  res.json({
    userId,
    Country: 'Mexico',
    Name: 'Aldo'
  })
})

app.get('/productDescription/:descriptionId/', (req, res) => {
  const {descriptionId } = req.params;
  res.json({
    descriptionId,
    name: 'Product1',
    price: '3000',
    Arrival: '3 days'
  })
})


app.listen(port, () => {
  console.log("Mi port" + port )
});

