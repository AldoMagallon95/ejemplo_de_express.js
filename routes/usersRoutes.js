const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
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


router.get('/:userId/', (req, res) => {
  const {userId} = req.params;
  res.json({
    userId,
    Country: 'Mexico',
    Name: 'Aldo'
  })
})

module.exports = router;

