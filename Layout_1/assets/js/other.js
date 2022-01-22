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