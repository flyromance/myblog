// 登录
$('.j-btn-signout').on('click', function (e) {
    var $this = $(this);
    return;
    $.ajax({
        url: '/signout',
        method: 'post',

    });
});