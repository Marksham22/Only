function myFunction(x) {
    x.classList.toggle("change");
    $('div#navchange').toggleClass('show');
    $('body').toggleClass('nav-menu');
}

$(document).ready(function(){

    $('.footer-heading > span').click(function(){
        $(this).parents('.footer-menu-col').toggleClass('menu-open');
        $(this).parents('.footer-menu-col').siblings().removeClass('menu-open');
    });


    jQuery('#mobile-side-drawer').on('click', function () { 
            // menu icon js
            $(this).toggleClass('change');
            jQuery('.main_header').toggleClass('active');
            jQuery('body').toggleClass('menu_active');
        });

    // gallery

    var $masonrygallery = $('#masonrygallery');
    $masonrygallery.imagesLoaded( function() {
        $masonrygallery.masonry({
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            itemSelector: '.item'
        });
    }); 


    $('.banner-slider').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        navText: ["<img src='./assets/images/arrow-left-long.svg'>","<img src='./assets/images/arrow-right-long.svg'>"],
        dots: true,
        dotsData: true,
        pagination: true,
        autoplay: true,
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

    

    $('.treding-slider').owlCarousel({
        loop:false,
        nav:true,
        dots:false,
        autoplay: false,
        margin:30,
        autoplayTimeout: 4500,          
        smartSpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            571:{
                items:2,
                nav: true,
            },
            991:{
                items:3,
                nav: true,
            },
            1199:{
                items:4,
                nav: true,
            }
        }
    });

    $('.categories-slider').owlCarousel({
        loop:false,
        nav:true,
        dots:false,
        autoplay: true,
        margin:30,
        autoplayTimeout: 4500,          
        smartSpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            571:{
                items:2,
                nav: true,
            },
            991:{
                items:3,
                nav: true,
            },
            1199:{
                items:4,
                nav: true,
            }
        }
    });

    $('.testimonial-slider').owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        center: true,
        margin:30,
        autoplay: false,
        autoplayTimeout: 4500,          
        smartSpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            571:{
                items:2,
                nav: true,
                dotsEach: 2,
            },
            991:{
                items:3,
                nav: true,
                dotsEach: 3,
            },
            1199:{
                items:3,
                nav: true,
                dotsEach: 2,
            }
        }
    });


    // sticky menu js ------------
    window.onscroll = function() {myFunction()};
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }


    $('#search-button-mob').click(function() {
        $('.search-wrapper').addClass("activesearch");
    });
    $('.search-close').click(function() {
        $('.search-wrapper').removeClass("activesearch");
    });



    $('li.child a .arrow').click(function(){
        $(this).parent().parent('.has-child').addClass('child-active');
        $(this).next().children('.close').addClass('close-active');
    });
    $('.navbar-nav li.child span.close').on('click', function(){
        $(this).parent().parent().removeClass('child-active');
        $(this).removeClass('close-active');
    });


    $('.footer_mainhead > span').click(function(){
        $(this).parents('.footer-menu-col').toggleClass('menu-open');
        $(this).parents('.footer-menu-col').siblings().removeClass('menu-open');
    });
});