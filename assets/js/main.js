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

const badgeElem = document.querySelector('header .badges')
const toTopElem = document.querySelector('#to-top')

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    gsap.to(badgeElem, 0.6, {
      opacity: 0,
      display: 'none'
    })
    gsap.to(toTopElem, .2, {
      x: 0
    })
  } else {
    gsap.to(badgeElem, 0.6, {
      opacity: 1,
      display: 'block'
    })
    gsap.to(toTopElem, .2, {
      x: 100
    })
  }
}, 300))

toTopElem.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})

const fadeElems = document.querySelectorAll('.visual .fade-in')
fadeElems.forEach(function (elem, idx) {
  gsap.to(elem, 1, {
    delay: .7 * (idx + 1),
    opacity: 1
  })
})

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
})

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

new Swiper('.awards .swiper-container', {
  direction: 'horizontal',
  autoplay: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
})

const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion

  if (isHidePromotion) {
    promotionEl.classList.add('hide')
  } else {
    promotionEl.classList.remove('hide')
  }
})

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, 1, {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  })
}

floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

let spyElems = document.querySelectorAll('section.scroll-spy')
spyElems.forEach(function (elem) {
  new ScrollMagic.Scene({
    triggerElement: elem,
    triggerHook: .8
  })
  .setClassToggle(elem, 'show')
  .addTo(new ScrollMagic.Controller())
})

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()