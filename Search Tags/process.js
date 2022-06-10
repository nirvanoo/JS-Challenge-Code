let tagInput = document.querySelector(".tags__input");
let tagItem = document.querySelector(".tags__item");
let tagList = document.querySelector(".tags__list");
let tagIcons = document.querySelectorAll(".tags__icon");
let removeBtn = document.querySelector(".tags__remove-all");

tagInput.addEventListener("keydown", e => {
    if (e.which == "13" && tagInput.value !== "") {
        let clone = tagItem.cloneNode(true);
        clone.children[0].textContent = tagInput.value;
        clone.classList.remove("hidden");
        tagList.appendChild(clone);
        tagInput.value = "";
        tagIcons = document.querySelectorAll(".tags__icon");
        for (let i = 0; i < tagIcons.length; i++) {
            tagIcons[i].onclick = function() {
                this.parentElement.classList.add("hidden");
            }
        }
    }
    if (e.which == "8" && tagInput.value == '') {
        tagIcons = document.querySelectorAll(".tags__icon");
        if (tagIcons.length > 1) {
            tagIcons[tagIcons.length - 1].parentElement.remove();
        }
    }
})


removeBtn.onclick = function() {
    for (let i = 0; i < tagIcons.length; i++) {
        tagIcons[i].parentElement.classList.add("hidden");
    }
}