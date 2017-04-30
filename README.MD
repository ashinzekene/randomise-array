## randomise-array

Library to help you randomise arrays, and generate new ones with any length

### Installation
To install randomise-array, run 

```
npm install randomise-array
```

### Usage
randomise-array is very easy to use

```javascript
var randomise = require('randomise-array')

var myArray = [ 1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ]

randomise(myArr)
//> [ 1, 3, 4, 8, 7, 2, 6, 2, 5, 7 ]

randomise(myArr, {
  length: 5,
  unique: true,
})
//> [ 1, 9, 5, 7, 10 ]

randomise(myArr, {
  length: 20,
  gte: 5,
  lte: 8
})
//> [ 6, 5, 5, 7, 8, 8, 6, 8, 5, 6, 8, 7, 7, 6, 8, 8, 6, 8, 5, 5 ]
```
### API 
```javascript
randomise(arr, [options])
arr: Array = 'old array'
options = {
  length: Number = 'length of new array',
  unique: Boolean = 'unique values for each item in array',
  gte: Number = 'greater than or equal to',
  lte: Number = 'less than or equal to'
}
```

### LICENSE

**randomise-array** is licensed under the MIT license.