
function randomArray(arr, options= {}){
  //First perform type checks
  if (typeof options !== "object") {
    return new Error('The second argument must be an object')
  }
  if (! arr[0] || typeof arr === 'string') {
    return new Error('The first argument must be an array')
  }
  var currInd, randInd
  var arr = arr
  var newArr = []
      options = options || []
      options.length = options.length || arr.length

      if (typeof options.lte !== 'number' && typeof options.lte !== 'undefined') {
        return new Error('lte must be a number')
      }
      if (typeof options.gte !== 'number' && typeof options.lte !== 'undefined') {
        return new Error('gte must be a number')
      }
      if (options.lte) {
        arr = arr.filter((val) => {
          return val <= options.lte
        })
      }

      if (options.gte) {
        arr = arr.filter((val) => {
          return val >= options.lte
        })
      }

  if(options.length > arr.length && options.unique) {
    return new Error(`Cannot generate ${options.length} unique values from ${arr.length} values`)  
  }

  for (currInd = 0; currInd < options.length; currInd++) {
    randInd= Math.floor(Math.random()* arr.length)
     newArr[currInd] = arr[randInd] 
    if (options.unique) {
      arr.splice(randInd,1)
    }
  }
  return newArr
}

module.exports= exports = randomArray