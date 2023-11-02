let slideHeader = document.querySelectorAll(".slides");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let dots = document.querySelectorAll(".dot");

var counter = 0;
// next btn function
next.addEventListener("click", slideNext);

function slideNext() {
  slideHeader[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= slideHeader.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideHeader[counter].style.animation = "next2 0.5s ease-in forwards";
  indicators();
}
// prev btn function
prev.addEventListener("click", slidePrev);

function slidePrev() {
  slideHeader[counter].style.animation = "prev1 0.5s ease-in forwards";
  if (counter == 0) {
    counter = slideHeader.length - 1;
  } else {
    counter--;
  }
  slideHeader[counter].style.animation = "prev2 0.5s ease-in forwards";
  indicators();
}
// autoplay function
function autoPlay() {
  deletInterval = setInterval(timer, 5000);
  function timer() {
    slideNext();
    indicators();
  }
}
autoPlay();

// dots btn function
function indicators() {
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[counter].className += " active";
}
function switchSlide(currentSlide) {
  currentSlide.classList.add("active");
  var slideId = currentSlide.getAttribute("attr");
  if (slideId > counter) {
    slideHeader[counter].style.animation = "next1 0.2s ease-in forwards";
    counter = slideId;
    slideHeader[counter].style.animation = "next2 0.2s ease-in forwards";
  }
  else if ( slideId == counter) {
    return;
  }
  else {
    slideHeader[counter].style.animation = "prev1 0.2s ease-in forwards";
    counter = slideId;
    slideHeader[counter].style.animation = "prev2 0.2s ease-in forwards";
  }
}