$(document).ready(function(){
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // rtl: true,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        infinite: true,
        mobileFirst: true,
    });
});