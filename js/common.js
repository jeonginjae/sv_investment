$(function () {
    /*스크롤 이동*/ 
    $('.aside-about ul li a').click(function(e){
        // console.log('click!!');
        var thisElem = $(this.hash); //$('#intro') this.hash => #intro
        // console.log(thisElem.offset().top);
        $('html,body').stop();
        $('html,body').animate({scrollTop : thisElem.offset().top}, 600);
        // e.preventDefualt();
        return false;
    });
    

    /*클릭한 버튼 색상 번경*/ 
    $(window).scroll(function() {
        var wHeight = $(this).height();
        var scTop = $(this).scrollTop();
        var starPoint = 150;
        $('section').each(function(i) {
            var sectionIndex = i;
            var thisOffset = $(this).offset();
            if( thisOffset.top - starPoint <= scTop && scTop < thisOffset.top + wHeight){
                $(this).addClass('active');
                $('.aside-about ul li a').removeClass('on'); //기존 추가된 on 클래스를 삭제
                $('.aside-about ul li a').each(function( index ){
                    if( index == sectionIndex ){
                        $(this).addClass('on');
                    }
                });
                $('.aside-about ul li a').eq(sectionIndex).addClass('on');
            }
        });
    });
    

});