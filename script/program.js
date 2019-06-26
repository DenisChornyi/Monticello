$(document).ready(function(){
    $('.header-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        dots: true,
        arrows: false
    });

    $('.main-news-slide').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: '.main-news-right',
        prevArrow: '.main-news-left',
        dots: true,
        arrows: true
    });
});
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 2500);
    return false;
});