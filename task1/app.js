$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.navbar').removeClass('op');
    } else {
        $('.navbar').addClass('op');
    }
});
$(".vdeoprjts .owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
$("#LIZ .owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 5
        },
        1000: {
            items: 6
        }
    }
});

const changePic = (e) => {
    document.getElementById("main_image").src = e;
}