const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');


const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
const whitelist = ['https://localhost8080', 'http://127.0.0.1:5500/frontend.html'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null,true);
    }else(new Error('acceso no permitido'))
  }
}
app.use(cors(options));

app.listen(port, () => {
  console.log("Mi port" + port )
});


app.get('/home', (req, res) => {
  res.send('home');
 });

