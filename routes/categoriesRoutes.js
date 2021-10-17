const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const {categoryId, } = req.params;
  res.json({
    categoryId
  })
})

router.get('/:productId', (req, res) => {
  const { productId } = req.params;
  res.json({
     productId
  })
})


module.exports = router;
