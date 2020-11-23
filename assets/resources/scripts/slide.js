(
    function () {
        efeitoSlideVertical();
    }
);

function efeitoSlideVertical() {
    $("#btn-next").click(function () {
        $('#first-step').fadeOut(1000);
        $('#btn-next').fadeOut(1000);
        $('#second-step').fadeIn(3000);
        $('#btn-register').fadeIn(3000);
        $('#item').focus();

    });
}
