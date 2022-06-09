let eKey = document.querySelector(".key");
let eLocation = document.querySelector(".location");
let eWhich = document.querySelectorAll(".which");
let eCode = document.querySelector(".code");

let pressKeyDiv = document.querySelector(".press-key");
let keyInfo = document.querySelector(".key-info");
document.addEventListener('keydown', e => {
    pressKeyDiv.classList.add("hidden");
    keyInfo.classList.remove("hidden");
    if (e.key == ' ') { eKey.textContent = 'Space bar' } else { eKey.innerText = e.key; }
    eLocation.textContent = e.location;
    eWhich[0].textContent = e.which;
    eWhich[1].textContent = e.which;
    eCode.textContent = e.code;
})