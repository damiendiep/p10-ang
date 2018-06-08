document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
    $('.sidenav').sidenav();
});
$(document).ready(function () {
    //Effet parallax sur la page d'accueil
    let imgPos1 = document.querySelector("#img-parallax");
    imgPos1 = imgPos1.clientTop;
    let imgPos;
    $(window).scroll(function () {
        imgPos = $(this).scrollTop();
        $("#img-parallax").css({
            'top': imgPos1 + imgPos / 2 + 'px'
        });
    });

    // Montre/cache la navbar sur un scroll
    $(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            $("nav").css({
                'top': '0px'
            });
        }
        else {
            $("nav").css({
                'top': '-80px'
            });
        }
    });

});