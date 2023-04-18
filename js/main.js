$(function () {

    var lastScrollTop = 0, delta = 5;

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();

        // if (Math.abs(lastScrollTop - st) <= delta) return;

        if (sct > lastScrollTop && (lastScrollTop > 0)) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        };
        lastScrollTop = sct;

        if (sct > 100) {
            $('.header').addClass('bg');
        } else {
            $('.mainH').removeClass('bg');
        }
    });

    $('.header').on('scroll wheel touchmove', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        };
    });

    $('.scrolldown a').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $(this.hash).offset().top - 100 }, 1000);
    })

    // main visual : scroll down

    $('.main_product_slide').on('init afterChange', function (event, slick, currentSlide) {
        var current = $('.main_product_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.main_product_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    //main product slide



    $(window).on('scroll', function () {
        var sct = $(this).scrollTop();
        if (sct > 500) {
            $('.toTop').addClass('on');
        } else {
            $('.toTop').removeClass('on');
        }
    });
});
// //////// main script ////////////////

$(function () {
    $('.itm_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

























    // main_review
    $('.right_slide').slick({
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.right_slide').on('init afterChange', function (e, s, c) {
        var current = $('.right_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.main_review .slide_dots button').removeClass('on');
        $('.main_review .slide_dots button').eq(c ? c : 0).addClass('on');
    });

    $('.main_review .slide_dots button').on('click', function () {
        var idx = $(this).parent().index();
        $('.right_slide').slick('slickGoTo', idx);
    });

    $('.main_review .slide_dots button').on('click', function () {
        $('.main_review .slide_dots button').removeClass('on');
        $(this).addClass('on');
    });































    // hero_tab
    $('.left_slide').slick({
        fade: true,
        arrows: false,
    });



    $('.left_slide').on('init afterChange', function (e, s, c) {
        console.log(c);
        $('.main_hero .right_tab .itm').eq(c).addClass('on').siblings().removeClass('on');

    });

    $('.hero_arrows i:first-child').on('click', function () {
        $('.left_slide').slick('slickPrev')
    });

    $('.hero_arrows i:last-child').on('click', function () {
        $('.left_slide').slick('slickNext')
    });

    AOS.init();

























})