import {createItem, setListItem, getListItem} from './item.js';

var nameHeading = document.querySelector(".control__space");
var nameClock = document.querySelector(".product__buy-heading");  // tên đồng hồ
var id = document.querySelector(".product__buy-id");
var sell = document.querySelector(".product__buy-price-old"); // tiền
var real = document.querySelector(".product__buy-price-sale"); // tạm tính khi chưa ap dụng mã giảm giá
var imgSmall = document.querySelector(".product-container__primary-image-small img");
var imgBig = document.querySelector(".product-container__primary-image-big img")


var infoCloks = getListItem("productItem");
id.innerText = infoCloks.id;
nameHeading.innerText = infoCloks.name;
nameClock.innerText = infoCloks.name;
imgSmall.setAttribute("src",infoCloks.img);
imgBig.setAttribute("src",infoCloks.img);

if(infoCloks.sell)
    sell.innerText = infoCloks.sell;
else
    sell.innerText = infoCloks.real;

real.innerText = infoCloks.real;

//xử lí ô search 
const search = document.getElementById("search__box");
search.onkeyup = (e) => {
    if(e.keyCode === 13) {
        search.value ? search.value = "No data" : alert("Vui lòng nhập dữ liệu trong ô tìm kiếm.");
    }
}

// Đánh giá sản phẩm 

const stars = document.querySelectorAll(".evaluate__header__icon") ;
const rating = document.querySelector(".evaluate__header__praise") ;


stars.forEach((star,index) => {
    star.onclick = () => {
        //xu li ngoi sao
        if(star.src.includes("bad")) { 
            star.src = star.src.replace("bad","good");
            for(let i=0;i<index;i++) 
                stars[i].src = star.src;
        }
        else for(let i=index+1;i<stars.length;i++) 
                stars[i].src = star.src.replace("good","bad");
        
        //xu li danh gia
        let counting = 0;
        for(let i=0;i<stars.length;i++) 
            if(stars[i].src.includes("good")) counting++;
        rating.innerHTML = switchCounting(counting);
    }
}
)

function switchCounting(counting) {
    switch(counting) {
        case 1:
            return "Không thích";
        case 2:
            return "Tạm được";
        case 3:
            return "Bình thường";
        case 4:
            return "Rất tốt";
        case 5:
            return "Tuyệt vời";
    }
}
