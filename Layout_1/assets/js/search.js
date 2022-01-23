//xử lí ô search 
const search = document.getElementById("search__box");
search.onkeyup = (e) => {
    if(e.keyCode === 13) {
        search.value ? search.value = "No data" : alert("Vui lòng nhập dữ liệu trong ô tìm kiếm.");
    }
}
