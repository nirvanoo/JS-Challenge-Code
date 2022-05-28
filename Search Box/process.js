let searchInput = document.querySelector(".search__input");
let searchBtn = document.querySelector(".search__button");
let searchForm = document.querySelector(".search__form");
searchBtn.addEventListener('click', function() {
    searchForm.classList.add("search__form--open");
    searchInput.classList.add("search__input--open");
})

searchForm.addEventListener('click', (e) => {
    e.stopPropagation();
});

window.addEventListener('click', function() {
    searchForm.classList.remove("search__form--open");
    searchInput.classList.remove("search__input--open");
})