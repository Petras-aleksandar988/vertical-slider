const sliderContainer = document.querySelector(".slider-container");
const leftSlide = document.querySelector(".left-side");
const rightSlide = document.querySelector(".right-side");
const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");
const slideLength = rightSlide.querySelectorAll("div").length;

let slideIndex = 0;
leftSlide.style.top = `-${(slideLength - 1) * 100}vh`;

upButton.addEventListener("click", () => slide("up"));
downButton.addEventListener("click", () => slide("down"));

function slide(direction) {
  const slideHight = sliderContainer.clientHeight;
  if (direction === "up") {
    console.log("up");

    slideIndex++;
    if (slideIndex > slideLength - 1) {
      slideIndex = 0;
    }
  } else if (direction === "down") {
      slideIndex--;
      if (slideIndex < 0) {
          slideIndex  = slideLength -1
      }
  }
  rightSlide.style.transform = `translateY(-${slideIndex * slideHight}px)`;
  leftSlide.style.transform = `translateY(${slideIndex * slideHight}px)`;
}
