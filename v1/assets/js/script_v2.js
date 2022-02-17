$(function() {
    'use strict';

	var $slides 			= $('.slides');
    $slides.parallax();


    // SLIDE 06
    
    var $slider             = $('.slider');
    var $controls           = $('.controls');
    
    var _lenght             = $slider.find('.item').length;
    var _count              =  0;

    // console.log(_lenght);

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

        if($('.slide-06').length){
            if(_count == 0){
                $('.t-yellow').addClass('show');
                $('.t-red').removeClass('show');
                $controls.removeClass('c-red').addClass('c-yellow');
            } else if(_count == 1){
                $('.t-red').addClass('show');
                $('.t-yellow').removeClass('show');
                $('.t-green').removeClass('show');
                $controls.removeClass('c-yellow').removeClass('c-green').addClass('c-red');
            } else if(_count == 2){
                $('.t-green').addClass('show');
                $('.t-red').removeClass('show');
                $('.t-blue').removeClass('show');
                $controls.removeClass('c-red').removeClass('c-blue').addClass('c-green');
            } else if(_count == 3){
                $('.t-blue').addClass('show');
                $('.t-green').removeClass('show');
                $controls.removeClass('c-green').addClass('c-blue');
            }

            $('.item').eq(_count-1).find('.paragraph').removeClass('show');
            $('.item').eq(_count).find('.paragraph').addClass('show');
            $('.item').eq(_count+1).find('.paragraph').removeClass('show');
        }

        if($('.slide-09').length || $('.slide-12').length || $('.slide-15').length | $('.slide-18').length){

            $('.image').css({"-webkit-transform":"translateX("+_translateX+"px)"});

            if(_count == 0){
                setTimeout(function(){
                    $('.item').eq(_count).find('.title').addClass('show');
                    $('.item').eq(_count).find('.paragraph').addClass('show');
                },200);

                $('.lists').find('.l-item').removeClass('show');
            } else if(_count == 1){

                $('.item').eq(_count-1).find('.title').removeClass('show');
                $('.item').eq(_count-1).find('.paragraph').removeClass('show');

                setTimeout(function(){
                    $('.lists').find('.l-item').eq(0).addClass('show');
                },500);

                setTimeout(function(){
                    $('.lists').find('.l-item').eq(1).addClass('show');
                },700);

                setTimeout(function(){
                    $('.lists').find('.l-item').eq(2).addClass('show');
                },900);
                
            } 
        }

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
