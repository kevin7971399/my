$(function(){
    $("#scrollbar1").tinyscrollbar();

    $(".menu ul>li").hover(
        function(){
            $(this).find(">a").addClass("hover");
            $(this).find(".child").slideDown(100);
        },
        function(){
            $(this).find(">a").removeClass("hover");
            $(this).find(".child").slideUp(100);
        }
    );
});
