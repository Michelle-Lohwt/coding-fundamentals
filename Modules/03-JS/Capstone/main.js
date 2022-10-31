function missingLetter(str) {
  let start = str.charCodeAt(0)
  let missing = ''
  
  for(let i = 0; i < str.length; i++){
    if(str.charCodeAt(i) !== start){
      missing += String.fromCharCode(start)
      start++
    }
    start++
  }

  if(missing === '')
    return undefined

  return missing
}

console.log(missingLetter("abce"));