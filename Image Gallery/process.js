let images = document.querySelectorAll(".gallery__img");
let slider = document.querySelector(".slider");
let closeSlider = document.querySelector(".slider__close");
let imageSlider = document.querySelector(".slider__image");
let prevBtn = document.querySelector(".slider__prev");
let nextBtn = document.querySelector(".slider__next");
let currentIndex;

function showOnClick(imageArr, imageShow, slide) {
    let len = imageArr.length;
    for (let i = 0; i < len; i++) {
        imageArr[i].onclick = function() {
            currentIndex = i;
            slide.classList.add("show");
            imageShow.src = imageArr[i].src
            hideOrShow();
        }
    }
}

function checkIndex(index, length, btn) {
    if (index == length - 1 && btn == 'next' || index == 0 && btn == 'prev') {
        return true;
    }
    return false;
}

function hideOrShow() {
    checkIndex(currentIndex, images.length, 'next') ? nextBtn.classList.add("hidden") : nextBtn.classList.remove("hidden");
    checkIndex(currentIndex, images.length, 'prev') ? prevBtn.classList.add("hidden") : prevBtn.classList.remove("hidden");
}

function closeSlide() {
    closeSlider.onclick = function() {
        slider.classList.remove("show");
    }
}

prevBtn.onclick = function() {
    imageSlider.src = images[currentIndex - 1].src;
    currentIndex -= 1;
    hideOrShow();
}

nextBtn.onclick = function() {
    imageSlider.src = images[currentIndex + 1].src;
    currentIndex += 1;
    hideOrShow();
}

showOnClick(images, imageSlider, slider);
closeSlide();