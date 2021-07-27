$(function(){

    //back-To-Top//

    $('.back-To-Top').click(function(){
        $('html, body').animate({scrollTop:0}, 1500);

    })

    $(window).scroll(function(){
        var scrolling= $(this).scrollTop();
        if(scrolling>200){
            $('.back-To-Top').fadeIn();
        }
        else{
            $('.back-To-Top').fadeOut();
        }

        if(scrolling>150){
            $('.nav').addClass('bg');
        }
        else{
            $('.nav').removeClass('bg');
        }
    })

    //preloader//

    $(window).on('load', function(){
        $('.preloader').delay(500).fadeOut(500);
    })


    //smooth-scroll//


    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000
    });



    

})