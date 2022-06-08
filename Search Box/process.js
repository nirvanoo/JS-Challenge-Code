let searchBtn = document.querySelector(".search__button");

searchBtn.onclick = function() {
    this.parentNode.classList.toggle("open")
}