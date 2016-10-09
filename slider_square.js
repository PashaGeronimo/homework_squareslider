(function ($) {

    $.fn.slider_square = function (opt) {

        var options = $.extend({
            NumbPhotos: 10,

        }, opt);


        var make = function () {

            // рисуем 
            for (i = 1; i <= (options.NumbPhotos + 1); i++) {
                $('#container').append('<div id="dv' + i + '" style="background-image:url(img/work-' + i + '.jpg)"></div>');
            };

            // начальная позиция:
            var timeout = null;
            $('#redsquare').offset($('#dv1').offset());
            var curPos;

            $('[id *=dv]').hover(function () {
                $('#redsquare').stop(); // останавливаем анимацию если сменилась позиция
                curPos = $(this).offset();
                // заливаем все блуром
                $('[id *=dv]').css({
                    'filer': 'blur(5px)',
                    '-webkit-filter': 'blur(5px)',
                });
                $('#redsquare').stop();
                $('#redsquare').animate({
                    left: curPos.left,
                    top: curPos.top,
                });

                // очищаем от блура в текущем
                $(this).css({
                    'filer': 'blur()',
                    '-webkit-filter': 'blur()',
                });
            });
        }
        return this.each(make)
    }

} (jQuery))
