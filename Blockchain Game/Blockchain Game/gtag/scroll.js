$(function() {
    var scrollheight = $(".headerbar").height();
    console.log(scrollheight);
    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop();
        if (scrollPos > scrollheight) {
            $(".Home_nav__2iapp").css("position", "fixed");

        } else {
            $(".Home_nav__2iapp").css("position", "absolute");

        }
    })
});


var Swipes = new Swiper('.swiper-container', {
    speed: 500,
    loop: true,

    autoplay: {
        delay: 1000,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 40
        },

        3000: {
            slidesPerView: 8,
            spaceBetween: 20
        }
    }
});