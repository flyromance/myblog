// 登录
$('.j-btn-signout').on('click', function (e) {
    var $this = $(this);
    console.log(1321);
    return;
    $.ajax({
        url: '/signout',
        method: 'post',

    });
});