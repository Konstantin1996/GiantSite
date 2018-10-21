jQuery(document).ready(function($) {

    //Installing a slider with customers

    $(".owl-carousel").owlCarousel({
        loop:true,
        items: 3,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                loop: true,
                center: true,
                dots: false
            },
            768:{
                items:1,
                nav:true,
                center: true,
                navContainer: '#customer-navs',
                dots: false,
                navText: ['',''],
                navClass: ['rnd-back','rnd-frwd']
            },
            1025:{
                items:3,
                nav:true,
                loop:true,
                margin: 4,
                center: true,
                smartSpeed: 300,
                dots: false,
                navContainer: '#customer-navs',
                navText: ['',''],
                navClass: ['rnd-back','rnd-frwd'],
                stagePadding: 0
            }
        }
    });

    // Installing a slider with screenshots

    var owl = $('.owl-carousel-screenshots').owlCarousel({
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                loop: true,
                center: true,
                dots: false,
                nav:false
            },
            768:{
                items:1,
                nav:true,
                startPosition: 2,
                touchDrag: false,
                mouseDrag: false,
                navContainer: '#screenshot-navs',
                navText: ['',''],
                navClass: ['scr-btn-back','scr-btn-frwd'],
                dots: false
            },
            1025:{
                items: 7,
                nav: true,
                center: true,
                startPosition: 3,
                loop: true,
                dots: false,
                touchDrag: false,
                mouseDrag: false,
                onInitialized: carouselInit,
                stageOuterClass: 'owl-stage-screen',
                navContainer: '#screenshot-navs',
                navText: ['',''],
                navClass: ['scr-btn-back','scr-btn-frwd']
            }
        }
    });

    //Initial function for the screenshots slider

    function carouselInit(e) {
            var prev = e.item.index - 1;
            var next = e.item.index + 1;
            var nextNext = next + 1;
            var prevPrev = prev - 1;
            var lastNext = nextNext + 1;
            var lastPrev = prevPrev -1;
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(prev).addClass('changeVisible');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(next).addClass('changeVisible');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(prev).find('img').addClass('prev');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(next).find('img').addClass('prev');

            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(prevPrev).addClass('changeVisible-2');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(nextNext).addClass('changeVisible-2');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(prevPrev).find('img').addClass('prevdouble');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(nextNext).find('img').addClass('prevdouble');

            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(lastPrev).addClass('changeVisible-3');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(lastNext).addClass('changeVisible-3');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(lastPrev).find('img').addClass('prevlast');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(lastNext).find('img').addClass('prevlast');
    }

    // Changing screenshots slider after clicking on buttons

    owl.on('changed.owl.carousel', function(e){
            var current = e.item.index;
            var prev = e.item.index - 1;
            var next = e.item.index + 1;
            var nextNext = next + 1;
            var prevPrev = prev - 1;
            var lastNext = nextNext + 1;
            var lastPrev = prevPrev -1;

            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(lastPrev).find('img').addClass('prevlast');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(lastPrev).find('img').removeClass('prevdouble');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(lastPrev).removeClass('changeVisible-2');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(lastPrev).addClass('changeVisible-3');

            // LEFT lastPrev
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(prevPrev).find('img').removeClass('prevlast');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(prevPrev).find('img').removeClass('prev');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(prevPrev).removeClass('changeVisible');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(prevPrev).find('img').addClass('prevdouble');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(prevPrev).addClass('changeVisible-2');

            // LEFT prevPrev

            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(prev).find('img').removeClass('prevdouble');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(prev).removeClass('changeVisible-3');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(prev).find('img').removeClass('prevlast');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(prev).find('img').addClass('prev');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(prev).addClass('changeVisible');

            // LEFT prev

            // LEFT SIDE

            // CURRENT ITEM
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(current).find('img').removeClass('prev');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(current).removeClass('changeVisible');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(current).find('img').removeClass('prevdouble');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(current).removeClass('changeVisible-2');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(current).find('img').removeClass('prevlast');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(current).removeClass('changeVisible-3');

            // RIGHT SIDE

            // RIGHT next
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(next).removeClass('changeVisible-2');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(next).removeClass('changeVisible-3');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(next).find('img').removeClass('prevdouble');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(next).find('img').removeClass('prevlast');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(next).find('img').addClass('prev');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(next).addClass('changeVisible');

            // RIGHT nextNext
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(nextNext).removeClass('changeVisible-3');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(nextNext).find('img').removeClass('prevlast');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(nextNext).find('img').addClass('prevdouble');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(nextNext).addClass('changeVisible-2');

            // RIGHT lastNext
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(lastNext).find('img').removeClass('prev');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(lastNext).find('img').removeClass('prevdouble');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(lastNext).removeClass('changeVisible');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(lastNext).removeClass('changeVisible-2');
            $('.owl-carousel-screenshots .owl-item').not('.clone').eq(lastNext).addClass('changeVisible-3');
    })

    // Navigation scrolling

    $('.link-pricing').click(function() {
        var elementClick = $(this).attr('href');
        var destination = $(elementClick);
        $('html, body').animate({ scrollTop: destination.offset().top }, 2000);
        return false;
    });

    $('.link-download').click(function() {
        var elementClick = $(this).attr('href');
        var destination = $(elementClick);
        $('html, body').animate({ scrollTop: destination.offset().top }, 2000);
        return false;
    });

    $('.link-features').click(function() {
        var elementClick = $(this).attr('href');
        var destination = $(elementClick);
        $('html, body').animate({ scrollTop: destination.offset().top }, 2000);
        return false;
    });


    // Working with video

    $('video').click(function() {
        if(this.paused) {
            this.play();
            $('video').css('opacity','1');
            $('#controls').hide();
        } else {
            this.pause();
            $('video').css('opacity','0.5');
            $('#controls').show();
        }
    });

    $('#controls').click(function() {
        $('video')[0].play();
        $('video').css('opacity','1');
        $('#controls').hide();
    });

    // Working with Pricing list


    $('.offer-item:nth-child(2)').addClass('change-item');
    $('.offer-item:nth-child(2) .btn-wrapper button').addClass('background-btn');
    $('.offer-item:nth-child(2) .offer-price').addClass('change-btn');

    $('.offer-btn').on('click', function() {
        $('.offer-item').each(function(i,elem) {
            if ($(this).hasClass("change-item")) {
                $(this).toggleClass('change-item');
                $(this).find('p.offer-price').toggleClass('change-btn');
                $(this).find('div.btn-wrapper button.background-btn').toggleClass('background-btn');
            }
        });
        $(this).parent().parent().toggleClass('change-item');
        $(this).parent().parent().find('.offer-price').toggleClass('change-btn');
        $(this).toggleClass('background-btn');
    });

});
