// $(".wrapper").click(function() {

//     // $(".line-two").animate({
//     //     marginLeft: "50%",
//     //     width: "0px",
//     //     height: "0px",

//     // }, 500, function() {
//     //     // Animation complete.
//     // });
//     $(".line-one").animate({
//         marginTop: "30px",

//     }, 500, function() {});
//     $(".line-three").animate({
//         marginTop: "30px",
//         transform: "rotate(" + 45 + "deg)",
//     })
// });

var isClicked = false;
$(function() {
    if (!isClicked) {

        $(".wrapper")
            .on("click", function() {
                $(this).children(".line-two").addClass('Aanimate');
            })
            .on("animationend", function() {

            });
        isClicked = true;
    } else {
        $(".wrapper")
            .on("click", function() {
                $(this).children(".line-two").addClass('AanimateBackward');
            }).on("animationend", function() {

            });
        isClicked = false;
    }
});
$(function() {
    if (!isClicked) {

        $(".wrapper")
            .on("click", function() {
                $(this).children(".line-one").addClass('Banimate');
            })
            .on("animationend", function() {

            });
        isClicked = true;
    } else {
        $(".wrapper")
            .on("click", function() {
                $(this).children(".line-one").addClass('BanimateBackward');
            }).on("animationend", function() {

            });
        isClicked = false;
    }
});
$(function() {
    if (!isClicked) {

        $(".wrapper")
            .on("click", function() {

                $(this).children(".line-three").addClass('Canimate');
            })
            .on("animationend", function() {

            });
        isClicked = true;
    } else {
        $(".wrapper")
            .on("click", function() {

                $(this).children(".line-three").addClass('CanimateBackward');
            }).on("animationend", function() {

            });
        isClicked = false;
    }

});