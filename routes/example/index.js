const router = require('express').Router();

const exampleArray = [
  {
    id: 1,
    prop: 'Hello World'
  },
  {
    id: 2,
    prop: "Goodbye World"
  }
]


router.get('/', (req, res) => {
  res.status(200).json(exampleArray);
});

router.post('/', (req, res) => {
  let exampleProp = req.body.prop;
  exampleArray.push(req.body);
  let example = reverseString(exampleProp);
  res.status(200).json(example);
});

function reverseString(inputString) {
  let stringArray = inputString.split('');
  let reversedStringArray = [];

 for (let i = stringArray.length - 1; i >= 0; i--) {
    reversedStringArray.push(stringArray[i]);
  }

 let reversedString = reversedStringArray.join('');
  return reversedString;
}

module.exports = router;
