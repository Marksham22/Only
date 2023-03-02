
$(document).ready(function(){
    $('.banner-slider').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        navText: ["<img src='./assets/images/arrowprev.svg'>","<img src='./assets/images/arrownext.svg'>"],
        dots: true,
        autoplay: false,
        autoplayTimeout: 4000,          
        smartSpeed: 2000,
        responsive:{
            0:{
                items:1,
                nav: false
            },
            768:{
                items:1,
                nav: true,
            }
        }
    });

    $('.testimonial').owlCarousel({
        loop:false,
        margin: 80,
        nav:true,
        navText: ["<img src='./assets/images/arrowprev.svg'>","<img src='./assets/images/arrownext.svg'>"],
        dots:false,
        autoplay: false,
        autoplayTimeout: 4000,          
        smartSpeed: 1500,
        responsive:{
            0:{
                items:1,
                margin: 0,
            },
            767:{
                items:2,
                margin: 40,
            },
            1199:{
                items:3,
                margin: 80,
            }
        }
    });

    $('.footer-heading > span').click(function(){
        $(this).parents('.footer-menu-col').toggleClass('menu-open');
        $(this).parents('.footer-menu-col').siblings().removeClass('menu-open');
    });


    var $container = $('#container');
    $container.imagesLoaded( function() {
        $container.masonry({
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            itemSelector: '.item'
        });
    }); 

    $('.navigation-button').click(function(){
        $('body').toggleClass('menu-open'); 
        $('.menu-add').toggleClass('child-active');    
        $('li.child').removeClass('child-active');
        $('.close').removeClass('close-active');
    });

    $('li.child a .arrow-icon').click(function(){
        $(this).parent().parent('.has-child').addClass('child-active');
        $(this).next().children('.close').addClass('close-active');
    });
    $('li.child .close').on('click', function(){
        $(this).parent().parent().removeClass('child-active');
        $(this).removeClass('close-active');
    });

    $('.search a').click(function() {
        $('.search-wrapper').addClass("activesearch");
    });
    $('.search-close').click(function() {
        $('.search-wrapper').removeClass("activesearch");
    });

    $( ".custom-control-input" ).on("click", function() {
        if( $( "body" ).hasClass( "dark" )) {
            $( "body" ).removeClass( "dark" );
        } else {
            $( "body" ).addClass( "dark" );
        }
    });

    // sticky menu js ------------
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150){  
            $('header').addClass("sticky");
        }
        else{
            $('header').removeClass("sticky");
        }
    });
});

