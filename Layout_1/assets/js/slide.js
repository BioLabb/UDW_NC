// tạo chuyển động cho ảnh slide trang chủ
const slideImg = document.querySelector("#slides .slides-img");
let slideNum = 1;

setInterval(() => {
    slideImg.src = `./Layout_1/assets/images/slides/slide${slideNum++}.png`;
    slideNum===5 && (slideNum = 1);
}, 8000)
