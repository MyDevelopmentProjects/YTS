jQuery(document).ready(function ($) {
    "use strict"
    // ---------- Active Menu ---------- //
    var pathname = "/"
    if (window.location.pathname.match(/[^\/]+$/)) {
        pathname = window.location.pathname.match(/[^\/]+$/)[0];
    }

    $('.cr-nav a').each(function () {
        if ($(this).attr('href') == pathname) {
            $(this).parents('li').addClass('active');
        }
    });
    // ---------- Active Menu ---------- //
    // ---------- Preloader ---------- //

    setTimeout(function() {
        $('.preload-div').addClass('loading-text')
    }, 800)

    jQuery(window).load(function () {
        setTimeout(function() {
            $("#preloader").fadeOut("slow");
            $('.preloader-temp').removeClass('preloader-temp')
            document.cookie = "hasSeenLoading=true";
        }, 2000)
    });

    // ---------- Preloader ---------- //

    // ---------- contact popup --------bundle.js-- //
    $('#popup-btn').click(function () {
        $(this).next().toggle('slow');
        return false;
    });
    // ---------- contact popup ---------- //

    // ---------- News Ticker ---------- //
    var ticker = $('#ticker'),
        container = ticker.find('ul'),
        tickWidth = 1,
        speed = 0.1, // Control pace
        distance,
        timing;

    container.find("li").each(function (i) {
        tickWidth += $(this, i).outerWidth(true);
    });

    distance = tickWidth + (ticker.outerWidth() - $('#gameLabel').outerWidth());
    timing = distance / speed;

    function scrollIt(dist, dur) {
        container.animate({
            left: '-=' + dist
        }, dur, 'linear', function () {
            container.css({
                'left': ticker.outerWidth()
            });
            scrollIt(distance, timing);
        });
    }

    scrollIt(distance, timing);

    ticker.hover(function () {
        container.stop();
    }, function () {
        var offset = container.offset(),
            newPosition = offset.left + tickWidth,
            newTime = newPosition / speed;
        scrollIt(newPosition, newTime);
    });
    // ---------- News Ticker ---------- //

    // ------- Slide Meun ------- //
    $('.menu-link').bigSlide();
    // ------- Slide Meun ------- //

    // ------- gallelry slider ------- //

    var realSlider = $("ul#gallery-slider").bxSlider({
        speed: 1000,
        pager: false,
        infiniteLoop: false,
        hideControlOnEnd: true,
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
            changeRealThumb(realThumbSlider, newIndex);
        }
    });

    var realThumbSlider = $("ul#gallery-slider-thumb").bxSlider({
        minSlides: 5,
        maxSlides: 5,
        slideWidth: 156,
        slideMargin: 10,
        moveSlides: 1,
        pager: false,
        speed: 1000,
        infiniteLoop: false,
        hideControlOnEnd: true,
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
        }
    });

    linkRealSliders(realSlider, realThumbSlider);

    if ($("#gallery-slider-thumb li").length < 5) {
        $("#gallery-slider-thumb .bx-next").hide();
    }

    function linkRealSliders(bigS, thumbS) {

        $("ul#gallery-slider-thumb").on("click", "a", function (event) {
            event.preventDefault();
            var newIndex = $j(this).parent().attr("data-slideIndex");
            bigS.goToSlide(newIndex);
        });
    }

    function changeRealThumb(slider, newIndex) {
        var $thumbS = $("#gallery-slider-thumb");
        $thumbS.find('.active').removeClass("active");
        $thumbS.find('li[data-slideIndex="' + newIndex + '"]').addClass("active");

        if (slider.getSlideCount() - newIndex >= 4) slider.goToSlide(newIndex);
        else slider.goToSlide(slider.getSlideCount() - 4);

    }

    // ------- gallelry slider ------- //

    // ------- auther slider ------- //
    $('.auther-slider').bxSlider({
        pagerCustom: '#auther-slider-thumb',
        controls: false
    });
    // ------- auther slider ------- //

    // ------- products slider ------- //
    $('#product-slides').bxSlider({
        slideMargin: 10,
        pagerCustom: '#product-thumbnail',
        controls: false
    });
    // ------- products slider ------- //

    // ------- trending vertical slider ------- //
    $('.trending-slider').bxSlider({
        mode: 'vertical',
        slideMargin: 20,
        minSlides: 6,
        responsive: true,
        pager: false,
        controls: false,
        auto: true,
        pause: 6000
    });
    // ------- trending vertical slider ------- //

    // ------- news ticker slider ------- //
    $('#news-ticker').bxSlider({
        minSlides: 1,
        maxSlides: 4,
        slideWidth: 300,
        slideMargin: 15,
        ticker: true,
        tickerHover: true,
        useCSS: false,
        speed: 15000
    });
    // ------- news ticker slider ------- //

    // ------- banner slider home 2 ------- //
    $('#banner-news-slider').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        transitionStyle: "fade",
        nav: false
    })
    // ------- banner slider home 2  ------- //


    // ------- slider sidebar widget ------- //
    $('#post-slider').owlCarousel({
        items: 1,
        loop: false,
        dots: false,
        autoplay: false,
        nav: false
    })

    // ------- slider sidebar widget ------- //


    // ------- single post slider ------- //
    $('#single-post').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        transitionStyle: "fade",
        nav: false
    })
    // ------- single post slider ------- //

    // ------- post of the day slider ------- //
    $('#post-slider-1').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        responsive: {
            320: {items: 1, dots: false, nav: true},
            480: {items: 2},
            640: {items: 2},
            991: {items: 3},
            1199: {items: 4},
            1200: {items: 4}

        }
    });
    // ------- post of the day slider ------- //

    // ------- most viewd posts ------- //
    $('#post-slider-2').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        responsive: {
            320: {items: 1, dots: false, nav: true},
            640: {items: 2},
            991: {items: 2},
            1199: {items: 3},
            1200: {items: 3}

        }
    });
    // ------- most viewd posts ------- //

    // ------- slider sidebar widget ------- //
    $('#twitter-slider').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        autoplayTimeout: 5000,
        transitionStyle: "fade",
    })
    // ------- slider sidebar widget ------- //

    // ------- social icon expand ------- //
    $('.share-icon').on('click', function (e) {
        $('.blog-social').toggleClass("active");
    });
    // ------- social icon expand ------- //

    // ------- coming soon timer ------- //
    $('#comming-countdown').countdown({
        date: '10/5/2017 13:41:59',
        offset: -100,
        day: 'Day',
        days: 'Days'
    }, function () {

    });
    // ------- coming soon timer ------- //


    // ------- Sticky Smooth Scroll ------- //
    $('a[href="basics"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
    // ------- Sticky Smooth Scroll ------- //

    // ------- Prety Photo ------- //
    $("a[data-rel]").each(function () {
        $(this).attr("rel", $(this).data("rel"));
    });
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        theme: 'dark_square',
        slideshow: 3000,
        autoplay_slideshow: false,
        social_tools: false
    });
    // ------- Prety Photo ------- //

    // ------- autoheight function ------- //
    var setElementHeight = function () {
        var height = $(window).height();
        $('.fullscreen').css('height', (height));
    }
    $(window).on("resize", function () {
        setElementHeight();
    }).resize();
    // ------- autoheight function ------- //

    // ------- quantity box ------- //
    if ($('.quantity').length > 0) {
        var form_cart = $('.quantity');
        form_cart.prepend('<span class="minus"><i class="fa fa-minus"></i></span>');
        form_cart.append('<span class="plus"><i class="fa fa-plus"></i></span>');

        var minus = form_cart.find($('.minus'));
        var plus = form_cart.find($('.plus'));

        minus.on('click', function () {
            var qty = $(this).parent().find('.qty');
            if (qty.val() <= 1) {
                qty.val(1);
            } else {
                qty.val((parseInt(qty.val(), 10) - 1));
            }
        });
        plus.on('click', function () {
            var qty = $(this).parent().find('.qty');
            qty.val((parseInt(qty.val(), 10) + 1));
        });
    }
    // ------- quantity box ------- //

    // ------- custom scroll ------- //
    $('.btn-cart').on('click', function () {
        if (!$('body').hasClass('cartScroll')) {
            setTimeout(function () {
                $(".cart-list").mCustomScrollbar({
                    setHeight: '240px'
                });
                $('body').addClass('cartScroll');
            }, 100);
        }
    });
    $(window).load(function () {
        $("#custom-scroll").mCustomScrollbar({
            theme: "minimal",
            setHeight: '240px'
        });
    });
    // ------- Custom Scroll Bar ------- //


    $(document).on('click', '.slider-inner li', function (e) {
        e.preventDefault()
        var a = $(this).find('.caption a')
        if (a) {
            var href = $(a[0]).attr('href')
            if (href) {
                window.location.href = href
            }
        }
    })

    // ------- Scroll to Top ------- //
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('#scrollup').fadeIn();
        } else {
            $('#scrollup').fadeOut();
        }
    });
    $('#scrollup').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    // ------- Scroll to Top ------- //
    if ($('.grid').length) {
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item'
        });
        // layout Isotope after each image loads
        $grid.imagesLoaded().progress(function () {
            $grid.isotope('layout');
        });
    }
    // ------ ToolTip ------ //
    $('[data-toggle="tooltip"]').tooltip()

    setTimeout(function () {
        $.each($('.lazyImages'), function (i,obj) {
            if (obj) {
                var src = $(obj).attr('src')
                if (src) {
                    var items = JSON.parse(src)
                    if (items && items.length > 0) {
                        $($(obj).find('img')[0]).attr('src', '/uploads/' + items[0])
                        $($(obj).find('.detailImage')[0]).css('background-image', 'url(' + '/uploads/' + items[0] + ')');
                    }
                }
            }
        })

    }, 500)

});