// Header Start ==========================
const toggleOpenBtn = document.getElementById("toggleOpenBtn");
const toggleCloseBtn = document.getElementById("toggleCloseBtn");

toggleOpenBtn.addEventListener("click", function () {
  toggleOpenBtn.style.display = "none";
  toggleCloseBtn.style.display = "block";
  console.log("open button");
});

toggleCloseBtn.addEventListener("click", function () {
  toggleCloseBtn.style.display = "none";
  toggleOpenBtn.style.display = "block";
  console.log("close button");
});
// Header Ends ==========================



// Testimonial Slider Funcation Start =============================
let testimonialSlider = document.getElementById('testimonial-slider');
let upArrow = document.getElementById('upArrow');
let downArrow = document.getElementById('downArrow');

let x = 0;

upArrow.addEventListener('click', function () {
  if (x > '-750') {
    x = x - 250;
    testimonialSlider.style.top = x + 'px';
  }
})

downArrow.addEventListener('click', function () {
  if (x < 0) {
    x = x + 250;
    testimonialSlider.style.top = x + 'px';
  }
})

// Testimonial Slider Funcation Ends ==============================



// Counter Funcation Start ==============================
window.onload = () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("countOne", 0, 4500, 2000);
  counter("countTow", 0, 30500, 2000);
  counter("countThree", 0, 5205, 2000);
  counter("countFour", 0, 6982, 2000);
};
// Counter Funcation Ends ==============================


// Owl Carousel Start =============================
var owl = $('.owl-carousel');
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
});
// Owl Carousel Ends =============================