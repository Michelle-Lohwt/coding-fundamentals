const button = document.querySelector('.add__button')
const notificationCard = document.querySelector('.notification')

button.addEventListener('click', displayNotification)

function displayNotification(){
  notificationCard.classList.add('show')
}