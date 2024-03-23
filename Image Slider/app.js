const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  buttons = document.querySelectorAll(".button"),
  images = document.querySelectorAll(".carousel img");

let imageIndex = 0,
  intervalId;

let currIndex = 0;

function autoSlide() {
  intervalId = setInterval(() => slideImage(++imageIndex), 2000);
}

autoSlide();

function slideImage() {
  currIndex = imageIndex % images.length;
  carousel.style.transform = `translate(-${currIndex * 100}%)`;
}

wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
wrapper.addEventListener("mouseleave", autoSlide);

const updateClick = (e) => {
  clearInterval(intervalId);
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
  autoSlide();
};

buttons.forEach((button) => button.addEventListener("click", updateClick));
