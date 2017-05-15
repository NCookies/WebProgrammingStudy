$(function() {
    let prevSelected = $(".on");

    $(document).ready(function() {

        $("nav ul ul").css({display:"none"});

        $(".main").on('click', function() {

            if ($(this).is(prevSelected))   prevSelected = $(".on");

            $(this).next("ul").stop().slideDown();
            $(this).addClass("on");

            prevSelected.next("ul").stop().slideUp();
            prevSelected.removeClass("on");
            prevSelected = $(this);

        })
    });
});
