let openModalBtn = document.querySelector(".modal__btn-open");
let modal = document.querySelector(".modal");
let closeIcon = document.querySelector(".modal__close-icon");
let closeBtn = document.querySelector(".modal__close-btn");
let modalInner = document.querySelector(".modal__inner");

let toggleShow = function() {
    modal.classList.toggle("open");
}

openModalBtn.onclick = toggleShow;
closeIcon.onclick = toggleShow;
closeBtn.onclick = toggleShow;

modal.onclick = function() {
    this.addEventListener('click', function() {
        this.classList.remove("open");
        modalInner.addEventListener('click', function(e) {
            e.stopPropagation();
        })
    })
}