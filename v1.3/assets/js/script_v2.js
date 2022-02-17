$(function() {
    'use strict';

	var $slides 			= $('.slides');
    if($(window).width() > 1180){
        $slides.parallax();
    }

    var $slider             = $('.slider');
    var $controls           = $('.controls');
    
    var _lenght             = $slider.find('.item').length;
    var _count              =  0;


    $controls.find('.bt-left').on('click',function(){
        var $target = $(this);
        if(_count > 0){
            _count --;
        }
        changeSlide();
        setArrow();
    });

    $controls.find('.bt-right').on('click',function(){
        if(_count < (_lenght-1)){
            _count ++;
        }
        changeSlide();
        setArrow();
    });

    $('.year').on('mouseenter',function(){
        var _target = $(this).data('image');
        $(this).addClass('hover');
        $('.images').removeClass('show');
        $('.'+_target).addClass('show');

        if(_target == 'image-1'){
            $('.t-1').addClass('hover');
        }
    });

    $('.year').on('mouseleave',function(){
        $(this).removeClass('hover');
        $('.images').removeClass('show');

        $('.t-1').removeClass('hover');
    });


    $('.bt-play').on('click',function(){
        $(this).parent().find('.video').addClass('show');
        $(this).fadeOut(200);
        $(this).parent().find('.title').fadeOut(200);
        $(this).parent().find('.image-video').fadeOut(200);    
    });

    $('.slide-27').find('.title').on('mouseenter',function(){
        $('.slide-27').addClass('show');
    });

    $('.slide-27').find('.title').on('mouseleave',function(){
        $('.slide-27').removeClass('show');
    });
    

    function setArrow(){
        if(_count == 0){
            $controls.find('.bt-left').addClass('disable');
        }else{
            $controls.find('.bt-left').removeClass('disable');
        }

        if(_count == (_lenght-1)){
            $controls.find('.bt-right').addClass('disable');
        }else{
            $controls.find('.bt-right').removeClass('disable');
        }
    }

    function changeSlide(){
        var _translateX = $(window).width() * (_count)*-1;
        $slider.css({"-webkit-transform":"translateX("+_translateX+"px)"})

        if($('.slide-21').length){          

            if(_count == 0){
                setTimeout(function(){
                    $('.t-1').addClass('show');
                },200);

                $('.t-2').removeClass('show');

            } else if(_count == 1){

                setTimeout(function(){
                    $('.t-2').addClass('show');
                },300);

                $('.t-1').removeClass('show');    
            } 
        }
    }


});
