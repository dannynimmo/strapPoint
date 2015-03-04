/*
 * strapPoint v0.2.0
 * https://github.com/dannynimmo/strapPoint
 * Copyright 2015 Danny Nimmo
 */

;(function (window, document, $, undefined) {
    'use strict';

    var H = {

        namespace:     'strapPoint',
        eventName:     'strapPoint-responsive-breakpoint',
        currentSize:   null,
        previousSize:  null,
        listenerCount: 0,

        xs: { name: 'xs', maxWidth: 767,  value: 1 },
        sm: { name: 'sm', maxWidth: 991,  value: 2 },
        md: { name: 'md', maxWidth: 1199, value: 3 },
        lg: { name: 'lg', maxWidth: NaN,  value: 4 },

        $eventTarget: $(document),


        init: function () {
            H.currentSize = H.getSize();
            $(window).on('resize', function () {
                var size = H.getSize();
                if (size !== H.currentSize) {
                    H.previousSize = H.currentSize;
                    H.currentSize  = size;
                    H.$eventTarget.trigger(H.eventName);
                }
            });
        },


        getSize: function () {
            var windowWidth = $(window).width();
            if (windowWidth > H.md.maxWidth) {
                return H.lg.name;
            } else if (windowWidth > H.sm.maxWidth) {
                return H.md.name;
            } else if (windowWidth > H.xs.maxWidth) {
                return H.sm.name;
            } else {
                return H.xs.name;
            }
        },


        getListenerId: function () {
            return H.namespace + '-' + H.listenerCount++;
        },


        run: function (size, callback) {
            if (size === 'all' || size.indexOf(H.currentSize) >= 0) {
                var direction = (H[H.currentSize].value > H[H.previousSize].value) ? 'up' : 'down';
                callback(direction);
            }
        }

    };
    H.init();


    var R = {

        version: '0.2.0',


        xs: function (callback) {
            return R.on(H.xs.name, callback);
        },
        sm: function (callback) {
            return R.on(H.sm.name, callback);
        },
        md: function (callback) {
            return R.on(H.md.name, callback);
        },
        lg: function (callback) {
            return R.on(H.lg.name, callback);
        },
        change: function (callback) {
            return R.on('all', callback);
        },


        on: function (size, callback) {
            var listenerId = H.getListenerId();
            H.$eventTarget.on(H.eventName + '.' + listenerId, function () {
                H.run(size, callback);
            });
            return listenerId;
        },


        one: function (size, callback) {
            var listenerId = H.getListenerId();
            H.$eventTarget.one(H.eventName + '.' + listenerId, function () {
                H.run(size, callback);
            });
            return listenerId;
        },


        off: function (listenerId) {
            H.$eventTarget.off(H.eventName + '.' + listenerId);
        },


        is: function (size) {
            return (size.indexOf(H.currentSize) >= 0);
        },


        get: function () {
            return H.currentSize;
        }

    };
    $.strapPoint = R;

})(window, document, jQuery);
