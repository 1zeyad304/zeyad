var car = document.querySelector('.cart');
function open_cart(){
    car.classList.toggle("active")
}
var cart = document.querySelector('.nav-links');
function open_close_cart(){
    cart.classList.toggle("active")
}
// script button dark mode.js
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
let isChanged = false;

function toggleText() {
  var btn = document.getElementById("toggleBtn");
  if (isChanged) {
    btn.innerText = "🌙"; // النص الأصلي
  } else {
    btn.innerText = "☀️"; // النص الجديد
  }
  isChanged = !isChanged; // يبدل القيمة
}
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active")
}
  document.addEventListener('click', function(event) {
  const nav = document.querySelector('.nav-links');
  const toggle = document.querySelector('.menu-toggle');

  if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      nav.classList.remove('active');
  }
});

var swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});