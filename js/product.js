var arrGood = JSON.parse(localStorage.getItem('good'))
var img = arrGood.img
var name = arrGood.name;
var price = arrGood.price;
var number=$('#number').val()
$('#img').attr('src', img)
$('#name').html(name)
$('#price').html(price)
$(function () {
    $('#addCar').click(function () {
        var goods = { img: img, name: name, price: price,number:number};
        if (localStorage.getItem('goods') == null) {
            var arrShop = [];
            arrShop.push(goods);
            localStorage.setItem('goods', JSON.stringify(arrShop))
        } else {
            var localTrue = true;
            var local = JSON.parse(localStorage.getItem("goods"));
            for (var i = 0; i < local.length; i++) {
                if (name == local[i].name) {
                    localTrue = false;
                    alert('本地已经有该商品了')
                    break;
                }
            }
            if (localTrue) {
                local.push(goods);
                localStorage.setItem("goods", JSON.stringify(local))
                alert('已添加到购物车')
            }
        }
    })
})
// 加减
$(':button').click(function(){
    var text=eval($('#number').val()+$(this).val()+1)//this指代点击对象
    if(text>0){
        $('#number').val(text)
    }
})