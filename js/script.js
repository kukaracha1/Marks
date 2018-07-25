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


    function showPopup(params) {
        $('.contacts-wrap').addClass('popup');
        
    }

    $('.show-form').click( function(e) {
        e.preventDefault();
        showPopup();
    });

    $('.close').click( function(e) {
        e.preventDefault();
        $('.contacts-wrap').removeClass('popup');
        
    })


})