$(document).ready(function(){
	"use strict";
    $('.gt_mobile_menu').on('click', function() {
        if ($(window).width() <= 991) {
            $('.gt_navigation>ul,.gt_navigation2>ul').slideToggle('normal');
        }
    })
    $('.search-fld').on('click',function(){
        $('.search-wrapper-area').addClass('search_open');
        $('.gt_search_remove_btn').on('click',function(){
            $('.search-wrapper-area').removeClass('search_open');
        })
    });
    if($('#swiper-container').length){
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 1,
            paginationClickable: true,
            loop: false,
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            onInit: function(swiper){
        $('.gt_banner_text h2, .gt_banner_text h3, .gt_banner_text a,.gt_banner_text p').css('visibility','hidden');
            $(' .gt_banner_text h2 ').delay(800).queue(function(next) {
              $(this).addClass('animated fadeInUp ').css('visibility','visible');
              next();
              });
              $('.gt_banner_text h3').delay(800).queue(function(next) {
              $(this).addClass('animated fadeInUp').css('visibility','visible');
              next();
            });
             $('.gt_banner_text p').delay(800).queue(function(next) {
              $(this).addClass('animated fadeInLeft').css('visibility','visible');
              next();
            });
             $('.gt_banner_text a').delay(800).queue(function(next) {
              $(this).addClass('animated fadeInRight').css('visibility','visible');
              next();
            });

                   },
                   onSlideChangeStart: function(swiper){
                    $('.gt_banner_text h2, .gt_banner_text h3,.gt_banner_text p,.gt_banner_text a').css('visibility','hidden');
            $(' .gt_banner_text h2 ').delay(800).queue(function(next) {
              $(this).addClass('animated fadeInUp').css('visibility','visible');
              next();
              });
              $('.gt_banner_text h3').delay(800).queue(function(next) {
              $(this).addClass('animated fadeInUp').css('visibility','visible');
              next();
            });
             $('.gt_banner_text p').delay(800).queue(function(next) {
              $(this).addClass('animated fadeInLeft').css('visibility','visible');
              next();
            });
             $('.gt_banner_text a').delay(800).queue(function(next) {
              $(this).addClass('animated fadeInRight').css('visibility','visible');
              next();
            });
                   },

                       onSlideNextStart: function(swiper){
             
             $(' .gt_banner_text h2 ').removeClass('animated fadeInUp');
             $('.gt_banner_text h3').removeClass('animated fadeInUp');
             $('.gt_banner_text p').removeClass('animated fadeInLeft');
             $('.gt_banner_text a').removeClass('animated fadeInRight');
              

                   },
                     onSlidePrevStart: function(swiper){
             
             $(' .gt_banner_text h2 ').removeClass('animated fadeInUp');
             $('.gt_banner_text h3').removeClass('animated fadeInUp');
             $('.gt_banner_text p').removeClass('animated fadeInLeft');
             $('.gt_banner_text a').removeClass('animated fadeInRight');
              

                   },
        });
    }
    if($('#gt_courses_slider').length){
        $('#gt_courses_slider').owlCarousel({
            autoplay: true,
            autoPlay: 4000,
            slideSpeed : 800,
            autoplayHoverPause:true,
            loop:true,
            nav:false,
            responsiveClass:true,
            responsive:{
                0:{items:1},
                480:{items:1},
                600:{items:1},
                768:{items:2},
                1000:{items:2},
                1024:{items:2},
                1280:{items:3},
                1366:{items:3}
            }
        });
    }
    if($('#gt_team2_slider').length){
        $('#gt_team2_slider').owlCarousel({
            autoplay: true,
            autoPlay: 4000,
            slideSpeed : 800,
            autoplayHoverPause:true,
            loop:true,
            nav:false,
            responsiveClass:true,
            responsive:{
                0:{items:1},
                480:{items:1},
                600:{items:1},
                768:{items:2},
                1000:{items:2},
                1024:{items:3},
                1280:{items:4},
                1366:{items:4}
            }
        });
    }
    if($(".find_course_search").length){
        $(".find_course_search").chosen()
    }
    if($(".gt_d_privacy_dd").length){
        $(".gt_d_privacy_dd").chosen()
    }
    if($('.counter').length){
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }
    if($('#gt_teacher_slider').length){
        $('#gt_teacher_slider').owlCarousel({
            autoplay: true,
            autoPlay: 4000,
            slideSpeed : 800,
            autoplayHoverPause:true,
            loop:true,
            nav:false,
            responsiveClass:true,
            responsive:{
                0:{items:1},
                480:{items:1},
                600:{items:1},
                768:{items:2},
                1000:{items:3},
                1024:{items:3},
                1280:{items:4},
                1366:{items:4}
            }
        });
    }
    if($('#gt_testimonial_slider').length){
        $('#gt_testimonial_slider').owlCarousel({
            autoplay: true,
            autoPlay: 4000,
            slideSpeed : 800,
            autoplayHoverPause:true,
            loop:true,
            nav:false,
            responsiveClass:true,
            responsive:{
                0:{items:1},
                480:{items:1},
                600:{items:1},
                768:{items:2},
                1000:{items:2},
                1024:{items:2},
                1280:{items:3},
                1366:{items:3}
            }
        });
    }
    if($('#gt_fliker_slider').length){
        $('#gt_fliker_slider').owlCarousel({
            autoplay: true,
            autoPlay: 4000,
            slideSpeed : 800,
            autoplayHoverPause:true,
            loop:true,
            nav:true,
            dots:false,
            responsiveClass:true,
            responsive:{
                0:{items:1},
                480:{items:3},
                600:{items:3},
                768:{items:4},
                1000:{items:4},
                1024:{items:4},
                1280:{items:5},
                1366:{items:6}
            }
        });
    }
    if($('#tabs').length){
        $('#tabs').tab();
    }
    if($('.accord_hdg').length){
        //custom animation for open/close
        $.fn.slideFadeToggle = function(speed, easing, callback) {
          return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
        };
        $('.accord_hdg').accordion({
          defaultOpen: 'accord1',
          cookieName: 'nav',
          speed: 'slow',
          animateOpen: function (elem, opts) { //replace the standard slideUp with custom function
            elem.next().stop(true, true).slideFadeToggle(opts.speed);
          },
          animateClose: function (elem, opts) { //replace the standard slideDown with custom function
            elem.next().stop(true, true).slideFadeToggle(opts.speed);
          }
        });
    }
    if ($('.back-to-top a').length) {
        $('.back-to-top a').on('click',function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
    }
    $('.progressbar').each(function(){
        var t = $(this),
            dataperc = t.attr('data-perc'),
            barperc = Math.round(dataperc*5.56);
        t.find('.bar').animate({width:barperc}, dataperc*25);
        t.find('.label').append('<div class="perc"></div>');
        
        function perc() {
            var length = t.find('.bar').css('width'),
                perc = Math.round(parseInt(length)/5.56),
                labelpos = (parseInt(length)-2);
            t.find('.label').css('left', labelpos);
            t.find('.perc').text(perc+'%');
        }
        perc();
        setInterval(perc, 0); 
    });
    if($("a[data-rel^='prettyPhoto']").length){
        $("a[data-rel^='prettyPhoto']").prettyPhoto();
    }
    if ($('.countdown').length) {
        $('.countdown').downCount({ date: '08/08/2018 12:00:00', offset: +1 });
    }
        if($('#up').length){
            $("#up").on('click',function(){
                $("#incdec input").val(parseInt($("#incdec input").val(),10)+1);
            });
        }
        
        if($('#down').length){
            $("#down").on('click',function(){
                $("#incdec input").val(parseInt($("#incdec input").val(),10)-1);
            });
        }
    $('.gt_listing_share').on('click' , function(){
        $(this).siblings('.gt_scl_icon').toggleClass('on_share');
    });
    if($('#contact-form').length){
        var contactForm = $("#contact-form");
            var contactResult = $('#contact-result');
                contactForm.validate({
                debug: false,
                submitHandler: function(contactForm) {
                $(contactResult, contactForm).html('Please Wait...');
                $.ajax({
                type: "POST",
                url: "assets/sendmail.php",
                data: $(contactForm).serialize(),
                timeout: 20000,
                success: function(msg) { 
                $(contactResult, contactForm).html('<div class="alert alert-success" role="alert"><strong>Thank you. We will contact you shortly.</strong></div>').delay(3000).fadeOut(9000); 
                },
                    error: $('.thanks').show()
                });
                return false;
                }
        });
    }
    if($('#map-canvas').length){
        google.maps.event.addDomListener(window, 'load', initialize);
    }
    function initialize() {
        var MY_MAPTYPE_ID = 'custom_style';
        var map;
        var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
        var featureOpts = [
            {
              stylers: [
                { hue: '#f9f9f9' },         
                { visibility: 'simplified' },
                { gamma: 0.7 },
                { saturation: -200 },
                { lightness: 45 },
                { weight: 0.6 }
              ]
            },
            {
            featureType: "road",
              elementType: "geometry",
              stylers: [
                { lightness: 200 },
                { visibility: "simplified" }
              ]
            },
            {
              elementType: 'labels',
              stylers: [          
                { visibility: 'on' }
              ]
            },
            {
              featureType: 'water',
              stylers: [
                { color: '#ffffff' }
              ]
            }
        ];  
        var mapOptions = {
            zoom: 15,
            scrollwheel: false,
            center: brooklyn,
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
            },
            mapTypeId: MY_MAPTYPE_ID
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
              mapOptions);
        var styledMapOptions = {
            name: 'Custom Style'
        };
        var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
        map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
    }
	
});
$(window).load(function() {
    if($('#gt_history_pagination').length){
        $('#gt_history_pagination').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 268,
            asNavFor: '#gt_history_slider'
        });
     }
    if($('#gt_history_slider').length){
        $('#gt_history_slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#gt_history_pagination"
        });
    }
});
$(window).load(function() {
    if($('#gt_choose2_slider_thumb').length){
        $('#gt_choose2_slider_thumb').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 170,
            itemMargin: 20,
            asNavFor: '#gt_choose2_slider_wrap'
        });
     }
    if($('#gt_choose2_slider_wrap').length){
        $('#gt_choose2_slider_wrap').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#gt_choose2_slider_thumb"
        });
    }
});