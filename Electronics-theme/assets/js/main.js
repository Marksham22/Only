function myFunction(x) {
    x.classList.toggle("change");
    $('div#navchange').toggleClass('show');
    $('body').toggleClass('nav-menu');
}

$(document).ready(function(){
    $('.bannerslider').owlCarousel({
        dots: true,
        dotsData: true,
        loop:true,
        nav:false,
        smartSpeed: 2500,
        autoplay: true,
        autoplayTimeout: 4000, 
        autoHeight: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        mouseDrag: false,
        responsive:{
            0:{
                items:1,
                // autoHeight: false,
                // autoplay: false,
            },
            571:{
                // autoplay: false,
                items:1
            }
        }
    });
    

    $('.owl-carousel.collection-slider').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplay: true,
        autoplayTimeout: 4500,          
        smartSpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            571:{
                items:2
            },
            991:{
                items:3
            },
            1199:{
                items:4
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


    $('.nav-search a').click(function() {
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
