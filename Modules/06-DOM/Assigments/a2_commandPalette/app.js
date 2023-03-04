const palette = document.querySelector('.palette')

document.addEventListener('keydown', (e) =>{
  if(e.ctrlKey && e.key === 'k'){
    palette.classList.remove("fade-out")
    palette.classList.add('fade-in')
  }
})