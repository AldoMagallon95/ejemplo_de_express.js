const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Nueva ruta');
});

app.get('/home', (req, res) => {
  res.send('home');
});


app.get('/products', (req, res) => {
  const products = [];
  const {size} = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  };
  res.json(products);
});

app.get('/products/filter', (req, res) => {
  res.send('Soy un filter');
})

app.get('/products/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  })
})

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

