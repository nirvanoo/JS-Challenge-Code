let cartNumber = document.querySelectorAll(".cart__size-number");
for (let i = 0; i < cartNumber.length; i++) {
    cartNumber[i].onclick = function() {
        for (let i = 0; i < cartNumber.length; i++) {
            if (cartNumber[i].classList.contains('cart__number--active')) {
                cartNumber[i].classList.remove('cart__number--active')
            }
        }
        this.classList.toggle('cart__number--active')
    }
}
let cartColor = document.querySelectorAll('.cart__color-item');
for (let i = 0; i < cartColor.length; i++) {
    cartColor[i].onclick = function() {
        for (let i = 0; i < cartColor.length; i++) {
            if (cartColor[i].classList.contains('cart__color--active')) {
                cartColor[i].classList.remove('cart__color--active')
            }
        }
        this.classList.toggle('cart__color--active')
    }
}