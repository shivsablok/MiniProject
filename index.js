let slideIndex = 1;
let slideshowInterval;

showSlides(slideIndex);
startSlideshow();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Open more details function
function openMoreDetails(Name) {
  window.open(`https://www.google.com/search?q=${Name}+images`, '_blank');
}

function startSlideshow() {
  slideshowInterval = setInterval(function () {
    plusSlides(1);
  }, 3000); // Change to the desired interval in milliseconds (e.g., 5000 for 5 seconds)
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Toggle hamburger menu
document.querySelector("#hamburger-menu").addEventListener("click", function () {
  document.querySelector(".myList").classList.toggle("show");
});

// Pause the slideshow on hover
// let slideshowContainer = document.querySelector('.slideshow-container');
// slideshowContainer.addEventListener('mouseenter', stopSlideshow);

// Resume the slideshow on mouse leave
// slideshowContainer.addEventListener('mouseleave', startSlideshow);
