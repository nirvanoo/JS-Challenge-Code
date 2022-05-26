let openModalBtn = document.querySelector(".modal__btn-open");
let modal = document.querySelector(".modal");
let closeIcon = document.querySelector(".modal__close-icon");
let closeBtn = document.querySelector(".modal__close-btn");
let modalInner = document.querySelector(".modal__inner");

openModalBtn.onclick = function() {
    modal.classList.add("open");
}

closeIcon.onclick = function() {
    modal.classList.remove("open");
}

closeBtn.onclick = function() {
    modal.classList.remove("open");
}

modal.onclick = function() {
    this.addEventListener('click', function() {
        this.classList.remove("open");
        modalInner.addEventListener('click', function(e) {
            e.stopPropagation();
        })
    })
}