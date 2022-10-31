function factorial(anyNumber){  
  if (anyNumber === 1)
    return anyNumber

  return anyNumber * factorial(anyNumber - 1)
}

console.log(factorial(5) === 120)
console.log(factorial(4) === 24)
console.log(factorial(1) === 1)