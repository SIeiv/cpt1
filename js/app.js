const slider = document.getElementById("slider");
const arrowLeft = document.querySelector(".new-products__categories-products-main-aleft");
const arrowRight = document.querySelector(".new-products__categories-products-main-aright");
const slides = document.querySelectorAll(".new-products__categories-products-main-content-item");
const range = document.querySelector(".new-products__categories-products-slider");

const visibleSlidesCount = 4;

let currentSlideStart = 0;
let currentSlideEnd = visibleSlidesCount;
const sliderWidth = slider.clientWidth;

const showSlide = () => {
    slider.style.transform = `translateX(-${currentSlideStart * (sliderWidth / 4)}px)`;
    range.value = currentSlideStart;
}

const nextSlide = () => {
    currentSlideStart++;
    currentSlideEnd++;
    if (currentSlideEnd > slides.length) {
        currentSlideStart = 0;
    }
    showSlide();
}

const previousSlide = () => {
    currentSlideStart--;
    currentSlideEnd--;
    if (currentSlideStart < 0) {
        currentSlideStart = slides.length - visibleSlidesCount;
    }
    showSlide();
}

const setSlideFromRange = () => {
    currentSlideStart = Number(range.value);
    currentSlideEnd = currentSlideStart + visibleSlidesCount;
    showSlide();
}

arrowRight.addEventListener("click", nextSlide);
arrowLeft.addEventListener("click", previousSlide);
range.addEventListener("change", setSlideFromRange);
