const express = require('express');
const axios = require('axios');
const router = express.Router();
const commons = ['the', 'a', 'of', 'and', 'in', 'is', 'to']

function splitIntoWords (text) {
  let splitText = text.split(/\W+/);
  return splitText.map(text=> text.toLowerCase());
}

function createWordMap(wordsArray) {
  let wordsMap = {};

  wordsArray.map(entry=>{
    if(wordsMap.hasOwnProperty(entry)){
      wordsMap[entry]++;
    }
    else {
      wordsMap[entry] = 1
    }
  })
  return wordsMap;
}

function sortByCount (wordsMap) {
  let finalWordsArray = [];
  finalWordsArray = Object.keys(wordsMap).map(key=>{
    return {
      name: key, 
      count: wordsMap[key]
    }
 }).sort((a, b) => {
    if (a.count > b.count)
      return -1;
    if (a.count < b.count)
      return 1;
    return 0;
});
 return finalWordsArray;
}

//Express Routes
//POST Route
router.post('/', (req,res)=>{
  const number = req.body.number;
  axios.get('https://gitlab.com/snippets/1824628/raw')
    .then(response=>{
      let words = splitIntoWords(response.data)
                  .filter(val=>!commons.includes(val));
      let count = createWordMap(words);
      let sort = sortByCount(count);
      let tableData = sort.slice(0,number)
      res.json(tableData);
    })
  // console.log(number);
  // res.json(number);
});

module.exports = router ;