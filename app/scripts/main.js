require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'
    }
});

function fasterTouchResponse() {
    //document.body.addEventListener('touchstart', function() {}, false);
}

/**
	iOS actually scales the window when you change orientation to landscape,
	so to overcome this you need to fix the scale factor and we release it
	as soon as a gesture is started.
**/
function iphoneScaleFix () {
    // Taken from HTML5 Boiletplate
    // https://github.com/h5bp/mobile-boilerplate/blob/a26b2bb24a9264d918c101bf274fdafcf845220b/js/helper.js
    var fix = {
        viewportmeta: document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua: navigator.userAgent
    };
    if (fix.viewportmeta && /iPhone|iPad|iPod/.test(fix.ua) && !/Opera Mini/.test(fix.ua)) {
        fix.viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
        document.addEventListener('gesturestart', function() {
            fix.viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
        }, false);
    }
}

require(['app-controller'], function (appController) {
    'use strict';

    iphoneScaleFix();

    fasterTouchResponse();
});
