$(function(){
    let selected = $(".on");

    function getIconsNumber() {
        let imgNum;

        $.each($("nav>ul>li"), function(index, value) {
            if ($(this).hasClass("on")) {
                imgNum = index;
            }
        });

        return imgNum + 1;
    }

    $(document).ready(function() {
        $("nav ul li").on('mouseenter', function() {
            $(this).addClass("on");
            $(".depth2").css({display: "block"});

            $(".image_area").show();
            $(".icon" + getIconsNumber()).show();

        }).on('mouseleave', function() {
            $(this).removeClass("on");
            $(".depth2").css({display: "none"});

            $(".image_area").hide();
            $(".icon" + getIconsNumber()).hide();
        })
    });
});
