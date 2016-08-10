$(function()
{
    $('[name="check_1"]').ircti();

    $('[name="radio_1"]').ircti();

    $('[name="radio_2"]').ircti({
        height: "20px",
        width: "20px",
        url_img_check: "../img/checkbox_check_2.png",
        url_img_no_check: "../img/checkbox_no_check_2.png"
    });
});
