;(function ($) {
    'use strict';

    var colours = [
        '#ea8369',
        '#fca9bc',
        '#99aeef',
        '#88fc79',
        '#cfef77',
        '#e070f9',
        '#7cf4b0',
        '#9bf4f7'
    ];

    var changeColour = function () {
        $('body').css('background-color', colours[Math.floor(Math.random() * colours.length)]);
    };

    var setSize = function (size) {
        $('#size').text(size);
    }

    var setDirection = function (direction) {
        switch (direction) {
            case 'up':
                $('#direction').text('growing');
                break;
            case 'down':
                $('#direction').text('shrinking');
                break;
        }
    }


    $.strapPoint.change(function (direction) {
        changeColour();
        setSize($.strapPoint.get());
        setDirection(direction);
    });


    changeColour();
    setSize($.strapPoint.get());

})(jQuery);

