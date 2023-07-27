const switchElement = document.querySelector('.switch') // Day-Night mode toggle

const hamburgerButton = document.getElementById('hamburger') // Hamburger menu toggle
const navList = document.getElementById('nav-list')
const icon = document.querySelector('.hamburger i')

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

function toggleButton() {
  navList.classList.toggle('show')
}

// Hamburger menu toggle
hamburgerButton.addEventListener('click', () => {
  navList.classList.toggle('show');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
  switchElement.classList.toggle('switch-hide')
})
