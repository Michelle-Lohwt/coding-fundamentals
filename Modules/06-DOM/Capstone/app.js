// Select the header element
const header = document.querySelector('header')

function hideHeader(){
  header.style.top = '-80px'
}

function showHeader(){
  header.style.top = '0px'
}

// Event listener: Mouse move                
// When user hovers around the top area, show the header                
window.addEventListener('mousemove', (e)=>{
  if(e.clientY < 50)
    showHeader()
  else hideHeader()
})
                
// Event listener: Scroll                
// When user scroll after a certain height, hide the header, else show the header
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 200)
    hideHeader()
  else showHeader()
})