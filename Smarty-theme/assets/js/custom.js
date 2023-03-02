$('.owl-carousel.products-slider').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            dots:false,
            autoplay: true,
            autoplayTimeout: 4000,          
            smartSpeed: 2000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });
        $('.owl-carousel.insta-slider').owlCarousel({
            loop:false,
            margin:30,
            nav:false,
            dots:false,
            autoplay: false,
            autoplayTimeout: 4000,          
            smartSpeed: 2000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });
        $(document).ready(function(){

            $('.footer-heading > span').click(function(){
                $(this).parents('.footer-menu-col').toggleClass('menu-open');
                $(this).parents('.footer-menu-col').siblings().removeClass('menu-open');
            });


            var $container = $('#container');
                // initialize Masonry after all images have loaded
                $container.imagesLoaded( function() {
                $container.masonry({
                columnWidth: '.grid-sizer',
                gutter: '.gutter-sizer',
                itemSelector: '.item'

                });
            }); 

            $('.navigation-button').click(function(){
                $('body').toggleClass('menu-open');     
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

            // $('#search-form-icon').click(function(){
            //     $(this).parent().addClass('active-form')
            //     $('body').addClass('search-form-open');
            // });
            // $('.search-close').click(function(){
            //     $('#search-form-icon').parent().removeClass('active-form')
            //     $('body').removeClass('search-form-open');
            // });

        });