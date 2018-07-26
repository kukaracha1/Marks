// ---------DEBUG---------
var listsSelectors = [{
        'list': '.when__list',
        'item': '.when__item',
        'count': 0
    },
    {
        'list': '.services__list',
        'item': '.services__item',
        'count': 0
    },
    {
        'list': '.cases__list',
        'item': '.cases__item',
        'count': 0
    }
]
// ---------END DEBUG---------

$(function () {

    // ---------DEBUG---------

    listsSelectors.forEach(function (element) {
        var item = $(element.item)[0];
        for (var i = 0; i < element.count - 1; i++) {

            $(element.list).append($(item).clone());
        }
    }, this);
    // ---------END DEBUG---------


    // -------------POPUP-----------
    function showPopup(params) {
        $('.contacts-wrap').addClass('popup');
    }

    $('.show-form').click(function (e) {
        e.preventDefault();
        showPopup();
    });

    $('.close').click(function (e) {
        e.preventDefault();
        $('.contacts-wrap').removeClass('popup');
    })
    // -------------END POPUP-----------

    // ------------SCROLL ON CLICK---------
    $('.info__more').click(function () {
        $('body > header').addClass('fixed');

        var offset = $('.funnel').offset().top - $('body>header').outerHeight();
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
    var headerEvent = $('body > header .logo').offset().top;
    headerCheck();
    window.onscroll = function () {
        headerCheck()
    };

    function headerCheck() {
        if (window.pageYOffset > headerEvent) {
            $('body > header').addClass('fixed');
        } else {
            $('body > header').removeClass('fixed');
        }
    }
    // --------------END HEADER FIXED-----------

    // ------------FORM VALIDATE-------------
    $("#phone").attr('type','text').mask("8(999) 999-9999");
    // ------------END FORM VALIDATE-------------

})