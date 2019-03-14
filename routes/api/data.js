const express = require('express');
const router = express.Router();

//Express Routes
//POST Route
router.post('/', (req,res)=>{
  const number = req.body.number;
  console.log(number);
  res.json(number);
})

module.exports = router;