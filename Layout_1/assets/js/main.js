var orders = document.querySelectorAll(".content__buy__click");
var imgs = document.querySelectorAll(".link__img");

function clickOrder () {
	alert("Ví của bạn không có tiền. Vui lòng nạp tiền để tiếp tục mua sắm!!");
}

for(var order of orders)
	order.addEventListener("click", clickOrder);

for(var img of imgs)
	img.addEventListener("click", clickOrder);
