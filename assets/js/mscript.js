// M7R
jQuery(document).ready(function($){
    $('.owl-carouselOne').owlCarousel({
        loop:true,
        margin:0,
        rtl:true,
        autoplay:true,
        nav: true,
        navText : ["<i class='fas fa-arrow-right'></i> <span>السابق</span>","<i class='fas fa-arrow-left'></i> <span>التالي</span>"],
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.owl-carouselTwo').owlCarousel({
        loop:true,
        margin:20,
        rtl:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:4
            },
            768:{
                items:6
            },
            1024:{
                items:10
            },
            1366:{
                items:12
            },
            1920:{
                items:14
            }
        }
    });

    $('.owl-carouselThree').owlCarousel({
        loop:true,
        margin:0,
        nav: true,
        navText : ["<i class='fas fa-arrow-right'></i> <span>السابق</span>","<i class='fas fa-arrow-left'></i> <span>التالي</span>"],
        rtl:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.owl-carouselFour').owlCarousel({
        loop:true,
        margin:0,
        nav: true,
        navText : ["<i class='fas fa-arrow-right'></i> <span>السابق</span>","<i class='fas fa-arrow-left'></i> <span>التالي</span>"],
        rtl:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.owl-carouselFive').owlCarousel({
        loop:true,
        margin:20,
        rtl:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:2
            },
            1024:{
                items:3
            }
        }
    });

    $(".nav_bx .navbar-nav li").hover(function () {
    $(".nav_bx .navbar-nav li ul").addClass("animated flipInX");
    });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});

