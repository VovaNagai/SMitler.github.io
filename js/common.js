$(function() {

    $('#my-menu').mmenu({
        extensions: ['widescreen', 'theme-black', 'effect-menu-slider', 'pagedim-black'],
        navbar: {
            title: '<img src="img/logo-1.svg" alt="Салон красоты Смитлер">'
        },
        offCanvas: {
            position: 'right'
        }
    });
    let api = $('#my-menu').data('mmenu');
    api.bind('opened', function () {
        $('.hamburger').addClass('is-active')
    }).bind('closed', function () {
        $('.hamburger').removeClass('is-active')
    });

    $('.carousel-services').on('initialized.owl.carousel', function () {
        setTimeout(function () {
            caruselServiceHeight()
        }, 100)

    });
    $('.carousel-services').owlCarousel({
        // loop: true,
        nav: true,
        smartSpeed: 700,
        navText:['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });
    // Ф-ция для одинакового размера высоты сладов по содержимому контента

    function caruselServiceHeight() {
        $('.carousel-services-item').each(function() {
            var ths = $(this),
                thsHeight = ths.find('.carousel-services-content').outerHeight();
                ths.find('.carousel-services-img').css('min-height', thsHeight);
        });
    }
    // Ф-ция для измененния последнего слова
    function wordLast() {
        $('.carousel-services-composition .name-services').each(function () {
            var ths = $(this);
            ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'))
        })
    }wordLast();
    // Ф-ция для измененния первого слова
    function wordFirst() {
        $('section .title').each(function () {
            var ths = $(this);
            ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'))
        })
    }wordFirst();

    //================================================== Select optimez. =================================
    $('select').selectize();

    //E-mail Ajax Send
    $("form.callback").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(th).find('.success').addClass('active').css("display", "flex").hide().fadeIn();
            setTimeout(function() {
                $(th).find('.success').removeClass('active').fadeOut();
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //Resize Window
    function onResize() {
        $('.carousel-services-content').equalHeights()
    }onResize();
    window.onResize = function () {                                         //TODO window.resize or window.onresize
        onResize()
    };

    //================================ initializ. owl-carousel reviews =============================
    $('.reviews').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 700,
        nav: false,
        dots: true,
        autoHeight: true
    });
    //================================ initializ. owl-carousel partners =============================
    $('.partners').owlCarousel({
        loop: true,
        smartSpeed: 700,
        nav: true,
        dots: false,
        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            }
        }
    });
    //================================ Top button =============================
    $(window).scroll(function () {
        if($(this).scrollTop() > $(this).height()) {
            $('.top').addClass('active');
        } else {
            $('.top').removeClass('active');
        }
    });
    $('.top').click(function () {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });
    //================================ Preloader =============================
    $(window).on('load', function () {
        $('.preloader').delay(1000).fadeOut('slow');
    })

});
