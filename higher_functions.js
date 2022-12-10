const sortArray = (arr) => {
  return arr.sort()
}
const reducer = (total, amount) => total + amount;

const mapArray = (arr) => {
  return arr.map()
}

const mapEvens = (arr) => {
  let myMap = new Map()
  for(let i = 0; i<arr.length; i++){
    if(arr[i]%2 === 0){
      myMap.set(i, arr[i])
    }
  }
  return myMap
}

const mapOdds = (arr) => {
  let myMap = new Map()
  for(let i = 0 ; i<arr.length; i++){
    if(arr[i]%2 !== 0){
      myMap.set(i, arr[i])
    }
  }
  return myMap
}
var arrayZ = [3,4,2,3,2,3]
console.log('sort', sortArray(arrayZ))
console.log('reduce', arrayZ.reduce(reducer))
console.log('mapEvens', mapEvens(arrayZ))
console.log('mapOdds', mapOdds(arrayZ))

test 123
