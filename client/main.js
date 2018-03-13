$(document).ready(function () {

    $('#login-message').hide();


    $('#login-btn').bind('click', function (e) {

        // Stop form from submitting normally
        e.preventDefault();

        // 服务器端跨域
        var jqxhr = $.post('http://localhost:4002/user/login', {
            username: $('#username').val(),
            password: $('#password').val()
        }, function (data) {
            // alert('fetching...');
            $("#login-message").fadeIn("slow");
            $('#login-message').addClass('alert-success');
            $('#login-message').html('<strong>Well done!</strong> Hello, ' + data.username);
        }).done(function () {
            // alert('second success');
        }).fail(function () {
            $("#login-message").fadeIn("slow");
            $('#login-message').addClass('alert-danger');
            $('#login-message').html('<strong>Oh snap!!</strong> Server Error!');
        }).always(function () {
            // alert('complete');
        });

        jqxhr.always(function () {
            //    alert('second finished'); 
        });
    })
});
