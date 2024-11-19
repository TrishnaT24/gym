$(document).ready(function(){//waits for html elements and dom to load fully before js execution
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('active');//This toggles the active class on the .navbar element,
        // which likely makes the navigation menu appear
        // and disappear (e.g., showing or hiding the menu).
    });

    $(window).on('scroll load', function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('active');

        if($(window).scrollTop() > 60){
            $('.header').addClass('active');
        }
        else{
            $('.header').removeClass('active');
        }

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

})