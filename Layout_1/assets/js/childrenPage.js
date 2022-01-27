//xử lí ô search 
const search = document.getElementById("search__box");
search.onkeyup = (e) => {
    if(e.keyCode === 13) {
        search.value ? search.value = "No data" : alert("Vui lòng nhập dữ liệu trong ô tìm kiếm.");
    }
}

// Đặt chiều cao của subnav

const img = document.querySelector(".background__img");
const subNav = document.querySelector(".subnav");

var heightNeed = img.clientHeight + 35;
subNav.style.height = heightNeed + 'px';
