<<<<<<< HEAD
import {getListItem} from "./item.js";
var listItemElement = document.querySelector(".list-item");

console.log(listItemElement);
var items = getListItem("listItem");
console.log(items);
for (var item of items) {
    console.log(item)
    const newTrElement = document.createElement("tr");
    const newNode = document.createTextNode(`<tr class="list-item">
                            <td>
                                <div class="img-item" >
                                    <img src="${item.img}" alt="">
                                    <div class="number"></div>
                                    <button>Xóa bỏ</button>
                                </div>
                            </td>
                            <td>
                                <h2 class="name-product">
                                    <a href="">MICHELE CSX LADIES GOLD PLATED 36MM</a>
                                </h2>
                            </td>
                            <td><h2 class="sub-money">${item.sell}</h2></td>
                        </tr>`
    )
    newTrElement.appendChild(newNode);
}
=======
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

>>>>>>> d87c28da55932d21a6c20a39fcba640b59a36001
