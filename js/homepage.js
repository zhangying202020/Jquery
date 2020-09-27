// // 添加class 获取商品详情
$(function(){
    $('.goods ul li:first-child img').attr('class','img')
    $('.img').click(function(){
        var img=$(this).attr("src")//拿属性用arrt
        var price=$(this).parent().parent().children('li:nth-of-type(3)').text();
        var name=$(this).parent().parent().children('li:nth-of-type(4)').text();
        var good={img:img,name:name,price:price};
           localStorage.setItem('good',JSON.stringify(good));
           location.href='product.html';
    })
})