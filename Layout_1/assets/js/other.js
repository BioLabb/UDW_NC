import {createItem, setListItem, getListItem} from './product.js';

var nameClock = document.querySelector(".name-product");  // tên đồng hồ
var money = document.querySelector(".sub-money"); // tiền
var total = document.querySelector(".cart-total .money"); // tạm tính khi chưa ap dụng mã giảm giá
var save = document.querySelector(".car-save h2"); // tổng tiền
var img = document.querySelector(".img-item img");


var infoCloks = getListItem("productItem");
console.log(infoCloks);

img.setAttribute("src",infoCloks.img);
nameClock.innerText = infoCloks.name;
if(infoCloks.real){
    money.innerText = infoCloks.real;
    total.innerText = infoCloks.real;
    save.innerText = infoCloks.real;
}
else{
    money.innerText = infoCloks.sell;
    total.innerText = infoCloks.sell;
    save.innerText = infoCloks.sell;
}

