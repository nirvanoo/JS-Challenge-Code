let images = document.querySelectorAll(".gallery__img");
let slider = document.querySelector(".slider");
let closeSlider = document.querySelector(".slider__close");
let imageSlider = document.querySelector(".slider__image");
let prevBtn = document.querySelector(".slider__prev");
let nextBtn = document.querySelector(".slider__next");
let currentIndex;

function show() {
    if (currentIndex == 0) {
        prevBtn.classList.add("hidden");
    } else {
        prevBtn.classList.remove("hidden");
    }
    if (currentIndex == images.length - 1) {
        nextBtn.classList.add("hidden");
    } else {
        nextBtn.classList.remove("hidden");
    }
    imageSlider.src = images[currentIndex].src;
    slider.classList.add("show");
}

closeSlider.onclick = function() {
    slider.classList.remove("show");
}

images.forEach((item, index) => {
    item.onclick = function() {
        currentIndex = index;
        show();
    }
});

prevBtn.onclick = function() {
    if (currentIndex > 0) {
        currentIndex--;
        show();
    }
}

nextBtn.onclick = function() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        show();
    }
}