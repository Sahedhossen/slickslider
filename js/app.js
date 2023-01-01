$(function(){

    // jQuery function
    $('.sliclSlider').slick({
        slidesToShow: 5,
        centerMode: true,
        centerPadding: '75px',
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow: ".arrows .leftArrow",
        nextArrow: ".arrows .rightArrow",
        dots: true,
    });
})