import {createItem, setListItem, getListItem} from './product.js';
// Mở cửa sổ thông báo khi mua hàng

var orders = document.querySelectorAll(".content__buy__click");
var imgs = document.querySelectorAll(".link__img");

function clickOrder () {
//	alert("Ví của bạn không có tiền. Vui lòng nạp tiền để tiếp tục mua sắm!!");
}

for(var order of orders)
	order.addEventListener("click", clickOrder());

for(var img of imgs)
	img.addEventListener("click", clickOrder);

// Dat chieu cao cua subnav

var slide = document.querySelector(".background__img");
var subNav = document.querySelector(".subnav");
var heightNeed = slide.clientHeight + 34;

console.log(heightNeed)

subNav.style.height = heightNeed + 'px';


// block info clock
var itemElements = document.querySelectorAll(".content__item");
itemElements.forEach(item =>{
    item.addEventListener('click', event=>{
        var productItem = new Object;
            productItem.name = item.querySelector(".content__discription p").innerText;
            productItem.id = item.querySelector("#clock_id").innerText;     // lấy id clock
            productItem.real = item.querySelector(".content__preze__real").innerText; // gia bán
            productItem.img = item.querySelector(".content__link img").getAttribute("src");  // link ảnh
            if(item.querySelector(".content__preze__sell")) // nếu có giá sale
                productItem.sell = item.querySelector(".content__preze__sell").innerText;
            else
                productItem.sell = 0;
        createItem("productItem",productItem);
		//setListItem("listItem",JSON.parse(localStorage.getItem('productItem')));
    })
});

// other.html
