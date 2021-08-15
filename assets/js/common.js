const searchElem = document.querySelector('.search')
const searchInputElem = searchElem.querySelector('input')

searchElem.addEventListener('click', function () {
  searchInputElem.focus()
})

searchInputElem.addEventListener('focus', function () {
  searchElem.classList.add('focused')
  searchInputElem.setAttribute('placeholder', '통합검색')
})

searchInputElem.addEventListener('blur', function () {
  searchElem.classList.remove('focused')
  searchInputElem.setAttribute('placeholder', '')
})

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()