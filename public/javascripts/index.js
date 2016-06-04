
// 轮播图
(function(){
    var _go = function(idx){
        $('#slide i').each(function(){
            $(this).removeClass("z-crt");
        });
        $('#slide li').each(function(){
            $(this).removeClass("z-crt");
        });
        $('#slide i').addClass(function(i){
            if (i == idx) {
                return "z-crt";
            }
        });
        $('#slide li').addClass(function(i){
            if (i == idx) {
                return "z-crt";
            }
        });
    };

    $('#slide i').each(function(idx){
        $(this).bind('click', _go.bind(null, idx));
    });

    var _timer;
    var _idx = 0;
    $("#slide").hover(function() {
        clearInterval(_timer);
    }, function() {
        _timer = setInterval(function() {
            _go(_idx);
            _idx++;
            _idx = _idx%($('#slide i').length);
        }, 3000);
    }).trigger("mouseleave");
})();

/*
// 轮播图
(function(){
    var adTimer;
    var len = $(".slider > li").length;
    var _width = $(".m-banner .slider > li:first").width();

    //滑入停止动画，滑出开始动画.
    $(".picbox").hover(function() {
        clearInterval(adTimer);
    }, function() {
        adTimer = setInterval(function() {
            moveLeft();
        }, 3000);
    }).trigger("mouseleave");


    function moveLeft() {
        $(".picbox ul").stop(true, false).animate({
                "marginLeft": -_width*(idx+1) + "px"
            }, 500, "linear", function(){
                if (idx==len-2){
                    var _first  = $(".picbox ul > li:first");
                    _first.clone().insertAfter($(".picbox ul > li:last"));
                    _first.remove();
                    $(".picbox ul").css("margin-left", -_width*idx+"px");
                } else {
                    idx++;
                }
            }
        );
    }
})();

 */