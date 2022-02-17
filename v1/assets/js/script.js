
$(function() {
    'use strict';

    $(".owl-carousel").owlCarousel({
        margin: 0,
        loop: !0,
        autoplay: !0,
        items: 3,
        smartSpeed: 1500,
        mouseDrag: !0,
        touchDrag: !0,
        nav: !0,
        dots: !1,
        navText: ["", "<img src='assets/images/arrow.svg' />"],
        responsiveClass: !0,
        responsive: { 0: { items: 1, nav: !0, loop: !0 }, 600: { items: 1, nav: !0, loop: !0 }, 991: { items: 2, nav: !0, loop: !0 }, 1200: { items: 3, nav: !0, loop: !0 }, 1500: { items: 3, nav: !0, loop: !0 } },
    });
    

    var $uniqueDna 			= $('.unique-dna');
    if($uniqueDna.length){
        $uniqueDna.parallax();
    }

    var $culture 			= $('.culture');
    if($culture.length){
        $culture.parallax();
    }

    var $brand 			= $('.brand');
    if($brand.length){
        $brand.parallax();
    }

    var $growth 			= $('.growth');
    if($growth.length){
        $growth.parallax();
    }

    var $innovation 			= $('.innovation');
    if($innovation.length){
        $innovation.parallax();
    }

    var $cultureQuote			= $('.cultureQuote-section');
    if($cultureQuote.length){
        $cultureQuote.parallax();
    }

    var $brandQuote			    = $('.brandQuote-section');
    if($brandQuote.length){
        $brandQuote.parallax();
    }

    var $growthQuote			= $('.growthQuote-section');
    if($growthQuote.length){
        $growthQuote.parallax();
    }

    var $quote			= $('.quote-section');
    if($quote.length){
        $quote.parallax();
    }
    

    

});