function calculateAge(date) {
  let today = new Date()
  let birthDate = new Date(date)
  let age = today.getFullYear() - birthDate.getFullYear()
  
  return age
}

console.log(calculateAge("20/7/2002") === 19)
console.log(calculateAge("1/1/1979") === 43)