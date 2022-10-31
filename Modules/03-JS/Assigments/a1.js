function sum(numbersArray){  
  let total = 0
  for(let num of numbersArray)
    total += num

  return total
}

console.log(sum([1, 2, 3, 4]) === 10)
console.log(sum([-3, 5, 19, -6]) === 15)