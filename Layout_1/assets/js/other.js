import {createItem, setListItem, getListItem} from './product.js';

var nameClock = document.querySelector(".name-product");  // tên đồng hồ
var money = document.querySelector(".sub-money"); // tiền
var total = document.querySelector(".cart-total"); // tạm tính khi chưa ap dụng mã giảm giá
var save = document.querySelector(".car-save"); // tổng tiền
var img = document.querySelector(".img-item img");


var infoCloks = getListItem("productItem");
console.log(infoCloks);

nameClock.innerHTML = infoCloks.name;
money.innerHTML = infoCloks.real;
img.setAttribute("src",infoCloks.img);

