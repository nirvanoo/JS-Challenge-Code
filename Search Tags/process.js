let tagInput = document.querySelector(".tags__input");
let tagList = document.querySelector(".tags__list");
// let tagIcons = document.querySelectorAll(".tags__icon");
// let tagItem = document.querySelector(".tags__item");
let removeBtn = document.querySelector(".tags__remove-all");
let tags = [];
/* 
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

*/
function checkTagExist(value) {
    if (value) {
        for (let i = 0; i < tags.length; i++) {
            if (value.trim() === tags[i]) return false;
        }
        return true;
    }
    return false;
}

function reRender() {
    tagList.innerHTML = '';
    for (let i = 0; i < tags.length; i++) {
        tagList.innerHTML += `
        <div class="tags__item">
            <span class="tags__name">${tags[i]}</span>
            <i class='bx bx-x tags__icon' onclick = 'removeTag(${i})'></i>
        </div>`;
    }
    tagInput.focus()
}

tagInput.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        if (checkTagExist(tagInput.value)) {
            tags.push(tagInput.value.trim());
            tagInput.value = "";
            reRender();
        } else tagInput.value = "";
    }
})

function removeTag(i) {
    tags.splice(i, 1);
    reRender();
}

function removeAllTag() {
    tags = [];
    reRender();
}

removeBtn.addEventListener('click', removeAllTag);