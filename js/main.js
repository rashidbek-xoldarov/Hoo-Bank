const burgerBtn = document.querySelector('.burger')
const siteNav = document.querySelector('.sitenav')

burgerBtn.addEventListener('click', function() {
  siteNav.classList.toggle('sitenav-open')
  burgerBtn.classList.toggle('burger-btn-open')
})