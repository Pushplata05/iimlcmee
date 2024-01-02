// $(document).ready(function() {
    // $('.slider_desk .slider-for').slick({
        var slider = $('.slider_desk .slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
            autoplay: true,
            autoplaySpeed: 7000,
            pauseOnHover: true
        });
        slider.on('afterChange', function(event, slick, currentSlide) {
            var vid = $(slick.$slides[currentSlide]).find('.slider_desk iframe');
            if (vid.length > 0) {
            slider.slick('slickPause');
            $(vid).get(0).play();
            }
        });
        $('.slider_desk iframe').on('ended', function() {
            console.log('Video Complete');
            slider.slick('slickPlay');
            slider.slick('slickGoTo', 0);
        });
    // });
    
    $('.slider_wrap_desk .slider-nav').slick({
        slidesToScroll: 1,
        slidesToShow: 4,
        vertical: true,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14.5a.74.74 0 0 1-.53-.22l-3-3l-3 3A.75.75 0 0 1 8 13.22l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.56.22"/></svg></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14.5a.74.74 0 0 1-.53-.22L8 10.78a.75.75 0 0 1 1-1.06l3 3l3-3a.75.75 0 0 1 1 1.06l-3.5 3.5a.74.74 0 0 1-.5.22"/></svg></button>',
        pauseOnHover: true
    });