const openButton = document.querySelector('.open-button')
const closeButton = document.querySelector('.close-button')
const slideOverContainer = document.querySelector('.slide-over-container')
const backdrop = document.querySelector('.bg-backdrop')

closeButton.addEventListener('click', slideOut)
openButton.addEventListener('click', slideIn)

async function slideOut(){
  slideOverContainer.classList.add('slide-out')
  await new Promise(resolve => setTimeout(resolve, 700))
  slideOverContainer.style.display = 'none'
  backdrop.style.display = 'none'
}

function slideIn(){
  backdrop.style.display = 'block'
  slideOverContainer.classList.remove('slide-out')
  slideOverContainer.style.display = 'flex'
  slideOverContainer.classList.add('slide-in')
}