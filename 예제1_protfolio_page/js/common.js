$(function () {
    $('dd:not(:first)').css('display','none');
    $('dl dt').click(function(){
        if($('+dd',this).css('display') == 'none'){
            // $('+dd dl').css('display','none');
            // $('+dd',this).css('display','block');
            $('+dd dl').slideUp('300');
            $('+dd',this).slideDown('300');
        }
    });


    /*클릭하면 내용이 바뀜 */
    $('ul li').click(function(){        
        // console.log($(this).index());
        $('.box').css('display','none');
        $('.box').eq($(this).index()).css('display','block');
    });
});