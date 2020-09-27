$(function () {
    var goods = JSON.parse(localStorage.getItem('goods'))
    for (var i = 0; i < goods.length; i++) {
        $('#shopping').append("<tr><td><input type='checkbox' name='" + i + "' class='box'/></td><td><img src='" + goods[i].img + "'></td><td>" + goods[i].name + "</td><td class='jg'>" + goods[i].price + "</td><td><input type='button' class='btn' value ='-'/><span class='num' name='" + i + "'>" + goods[i].number + "</span><input type='button' class='btn' value='+'  /></td><td class='money'>" + goods[i].price * goods[i].number + "</td><td><span class='del'>删除</span></td></tr>")
    }
    $('.btn').click(function () {
        // 加减
        var index;
        if ($(this).val() == '+') {
            index = $(this).prev().attr('name');
            var text = parseInt($(this).prev().html()) + 1;
            $(this).prev().html(text)
            goods[index].number = parseInt($(this).prev().html())
        } else { //点击 null
            index = $(this).next().attr('name');
            var text = parseInt($(this).next().html());
            if (text > 1) {
                $(this).next().html(text - 1);
                goods[index].number = text-1
            }
        }
        localStorage.setItem('goods', JSON.stringify(goods));
        // 小计
        var num = $(this).parent().children('span').html()
        console.log(num);
        var price = $(this).parent().parent().children(':nth-of-type(4)').html()
        $(this).parent().parent().children(':nth-of-type(6)').html(num * price)
    })
    //删除
    $('.del').click(function () {
        goods = JSON.parse(localStorage.getItem("goods"));
        goods.splice($(this).attr("name"), 1)
        localStorage.setItem("goods", JSON.stringify(goods));
        $(this).parent().parent().remove()
    })
    // 全选
    $('#checkall').click(function () {$(':checkbox').prop('checked', this.checked)})
    $('#checkalls').click(function () {$(':checkbox').prop('checked', this.checked)})
    // 确认全选
    $(":checkbox:gt(0)").click(function () {
        $("#checkall").prop("checked", $(":checkbox:gt(0):checked").length == parseInt($(":checkbox:gt(0)").length) - 2);
    })
    $(":checkbox:gt(0)").click(function () {
        $("#checkalls").prop("checked", $(":checkbox:gt(0):checked").length == parseInt($(":checkbox:gt(0)").length) - 2);
    })
    //全部商品
    $('#count').each(function () {
        var countall = parseInt($(":checkbox:gt(0)").length) - 2
        $('#count').html(countall)
    })
})
// 结算 合计商品个数
function pay() {
    var tolal = 0;
    var counts = 0;
    $("#shopping :checkbox").each(function () {
        var isCheck = $(this).prop('checked')
        if (isCheck == true) {
            // 结算
            var price = parseInt($(this).parent().parent().children(':nth-of-type(6)').html());
            tolal += price;
            $('#money').html(tolal)
            // 商品个数
            var nums = parseInt($(this).parent().parent().children(':nth-of-type(5)').children('span').html());
            counts += nums;
            $('#shopcount').html(counts)
        }
    })
}
//删除选中商品
$('#delete').click(function(){
    $("#shopping :checkbox").each(function () {
        var isCheck = $(this).prop('checked');
        if (isCheck) {
            goods = JSON.parse(localStorage.getItem("goods"));
            var n=$(this).attr('name');
            console.log(n);
            goods.splice(n, 1)
            localStorage.setItem("goods", JSON.stringify(goods));
            $(this).parent().parent().remove()
        }
    })
})


