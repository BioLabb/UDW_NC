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

    
    
    // block info clock
    var itemElements = document.querySelectorAll(".content__item");
    itemElements.forEach(item =>{
        item.addEventListener('click', event=>{
        var productItem = new Object;
            productItem.name = item.querySelector(".content__discription p").innerText;
            productItem.id = item.querySelector("#clock_id").innerText;     // lấy id clock
            productItem.real = item.querySelector(".content__preze__real").innerText;
            productItem.img = item.querySelector(".content__link img").getAttribute("src");  // link ảnh
            if(item.querySelector(".content__preze__sell")) // nếu có giá sale
                productItem.real = item.querySelector(".content__preze__sell").innerText; // gia bán
            else
            productItem.sell = undefined;
        createItem("productItem",productItem);
		//setListItem("listItem",JSON.parse(localStorage.getItem('productItem')));
    })
});

//index.html
var itemElements = document.querySelectorAll(".sanPhamMoi__content__nav__ul__li");
itemElements.forEach(item =>{
    item.addEventListener('click', event=>{
        var productItem = new Object;
        productItem.name = item.querySelector(".name").innerText;
        productItem.id = item.querySelector("#clock_id").innerText;     // lấy id clock
        // productItem.real = item.querySelector(".").innerText; // gia bán
        productItem.real = "Sắp có";
            var str = "." + item.querySelector(".sanPhamMoi__content__nav__ul__li__a img").getAttribute("src").slice(10);  // link ảnh
            productItem.img = str
            if(item.querySelector(".content__preze__sell")) // nếu có giá sale
            productItem.sell = item.querySelector(".content__preze__sell").innerText;
            else
                productItem.sell = 0;
                createItem("productItem",productItem);
                //setListItem("listItem",JSON.parse(localStorage.getItem('productItem')));
            })
        });