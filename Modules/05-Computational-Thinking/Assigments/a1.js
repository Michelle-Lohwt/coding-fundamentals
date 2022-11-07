const dices = [1, 2, 3, 4, 5, 6]
function possibleBonus(a, b){
  if ((b - a) in dices)
    return true
  return false
}

console.log(possibleBonus(3, 7))
console.log(possibleBonus(1, 9))
console.log(possibleBonus(5, 3))