var rand = require('./randomise-array')

console.log(rand([1,2,3,4,5,6,7,8,9,10], {
  length: 20,
  gte: 5,
  lte: "hii"
})) 