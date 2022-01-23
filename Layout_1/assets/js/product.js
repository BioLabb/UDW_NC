import {createItem, setListItem, getListItem} from './item.js';

var nameHeading = document.querySelector(".control__space");
var nameClock = document.querySelector(".product__buy-heading");  // tên đồng hồ
var sell = document.querySelector(".product__buy-price-old"); // tiền
var real = document.querySelector(".product__buy-price-sale"); // tạm tính khi chưa ap dụng mã giảm giá
var imgSmall = document.querySelector(".product-container__primary-image-small img");
var imgBig = document.querySelector(".product-container__primary-image-big img")


console.log(nameHeading);
var infoCloks = getListItem("productItem");
console.log(infoCloks);
nameHeading.innerText = infoCloks.name;
nameClock.innerText = infoCloks.name;
imgSmall.setAttribute("src",infoCloks.img);
console.log(infoCloks.img)
imgBig.setAttribute("src",infoCloks.img);

if(infoCloks.sell)
    sell.innerText = infoCloks.sell;
else
    sell.innerText = infoCloks.real;

real.innerText = infoCloks.real;


    