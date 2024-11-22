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
    slider.style.transform = `translateX(-${currentSlideStart * 292}px)`;
    range.value = currentSlideStart;
}

const nextSlide = () => {
    currentSlideStart++;
    currentSlideEnd++;
    if (currentSlideEnd > slides.length) {
        currentSlideStart = 0;
        currentSlideEnd = visibleSlidesCount;
    }
    showSlide();
}

const previousSlide = () => {
    currentSlideStart--;
    currentSlideEnd--;
    if (currentSlideStart < 0) {
        currentSlideStart = slides.length - visibleSlidesCount;
        currentSlideEnd = currentSlideStart + visibleSlidesCount;
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


const headerButton = document.querySelector(".header-present__header-cart-other-btn");
const popup = document.querySelector(".header-present__header-cart-popup-window");

const handleHeaderButtonClick = () => {
    if (popup.style.opacity === "0") {
        popup.style.display = "block";
        setTimeout(() => {popup.style.opacity = "1"}, 5);
    } else {
        popup.style.opacity = "0";
        setTimeout(() => {popup.style.display = "none"}, 200);
    }
}

headerButton.addEventListener("click", handleHeaderButtonClick);
