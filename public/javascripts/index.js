
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


// 滑动图
(function(){
    function MarqueeL(){
        if(_elist.scrollLeft > 1540)
            _elist.scrollLeft = 0;
        else
            _elist.scrollLeft += 1;
    }
    var _elist = document.getElementById('picbox');
    if (_elist) {
        setInterval(MarqueeL, 50);
    }

})();