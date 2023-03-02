$('#arrivals-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,  
    dots:true, 
    autoplay: false,
    autoplayTimeout: 2000,          
    smartSpeed: 1000,
    items:1,
    singleItem:true,
    slideBy:4,
    responsive:{
        0:{
            items:1,
            dots:false
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items: 4
        }
    }
});
$('#choose-brand-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,  
    dots:true, 
    slideBy:6,
    responsive:{
        0:{
            items:2,
            dots:false
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1201:{
            items: 6
        }
    }
});
 $('#our-customer-slider').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        nav:true,
        dots:false, 
        responsive:{
            0:{
                items:1,
                nav:true
            },
            
            1000:{
                items:1
            }
        }
});

$(document).ready(function(){
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


    $('.footer-heading > span').click(function(){
        $(this).parents('.footer-menu-col').toggleClass('menu-open');
        $(this).parents('.footer-menu-col').siblings().removeClass('menu-open');
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