import {createItem, setListItem, getListItem} from './item.js';
// Mở cửa sổ thông báo khi mua hàng

var orders = document.querySelectorAll(".content__buy__click");
var imgs = document.querySelectorAll(".link__img");

function clickOrder () {
	// alert("Ví của bạn không có tiền. Vui lòng nạp tiền để tiếp tục mua sắm!!");
}

for(var order of orders)
	// order.addEventListener("click", clickOrder());

for(var img of imgs)
	img.addEventListener("click", clickOrder);

// Dat chieu cao cua subnav

var slide = document.querySelector(".background__img");
var subNav = document.querySelector(".subnav");
// var heightNeed = slide.clientHeight + 34;

// subNav.style.height = heightNeed + 'px';


//
var itemElements = document.querySelectorAll(".content__item");
itemElements.forEach(item =>{
    item.addEventListener('click', event=>{
        var productItem = new Object;
            productItem.id = item.querySelector("#clock_id").innerText;
            productItem.real = item.querySelector(".content__preze__real").innerText;
            productItem.img = item.querySelector(".content__link img").getAttribute("src");
            if(item.querySelector(".content__preze__sell"))
                productItem.sell = item.querySelector(".content__preze__sell").innerText;
            else
                productItem.sell = 0;
        createItem("productItem",JSON.stringify(productItem));
		setListItem("listItem",JSON.parse(localStorage.getItem('productItem')));
    })
});

//tạo chuyển động cho ảnh slide trang chủ
const slideImg = document.querySelector("#slides .slides-img");
var slideNum = 1;

setInterval(() => {
    slideImg.src = `./Layout_1/assets/images/slides/slide${slideNum++}.png`;
    slideNum===5 && (slideNum = 1);
}, 8000)

//xử lí ô search 
const search = document.getElementById("search__box");
search.onkeyup = (e) => {
    e.keyCode === 13 && search.value !== "" && (search.value = "No data");
}