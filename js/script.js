
$(function () {
    // -------------POPUP-----------
    $('.show-form').click(function (e) {
        e.preventDefault();
        $('.contacts-wrap, body').addClass('popup');
    });

    $('.close-form').click(function (e) {
        e.preventDefault();
        $('.contacts-wrap, body').removeClass('popup');
    })
    // -------------END POPUP-----------

    // ------------SCROLL ON CLICK---------
    $('.more').click(function (e) {
        e.preventDefault();
        var offset = $('.funnel').offset().top - $('.header').height();
        $('html,body').animate({
                scrollTop: offset
            },
            'slow');
        
    });
    // ------------END SCROLL ON CLICK---------

    // ---------------SMOOTH SHOW ON SCROLL-----------
    $('.when__item, .cases__item').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100,
        repeat: true
    });
    // ---------------END SMOOTH SHOW ON SCROLL-----------

    // --------------HEADER FIXED-----------

    var headerEvent = 0;
    headerCheck();
    window.onscroll = function () {
        headerCheck()
    };

    function headerCheck() {
        var pageOffset = window.pageYOffset;

        if (pageOffset > headerEvent) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    }
    // --------------END HEADER FIXED-----------

    // ------------FORM VALIDATE-------------
    $("#phone").attr('type', 'text').mask("8(999) 999-9999");
    // ------------END FORM VALIDATE-------------

})