$(document).ready(function(){

    setTimeout(function(){
        $("#flyerModal").modal('show');
        setTimeout(function(){
            var width = $("#flyerModal").find("img").width();
            var height = $("#flyerModal").find("img").height();
            console.log(width,height);
            $('.write-div').css('width',width);
            $('.write-div').css('height',height);
            $('.empty').css('height',height-((height*1.5)/3));
        },500);
    }, 2000);

    $(window).on('resize', function(){
        var width = $("#flyerModal").find("img").width();
            var height = $("#flyerModal").find("img").height();
            console.log(width,height);
            $('.write-div').css('width',width);
            $('.write-div').css('height',height);
            $('.empty').css('height',height-((height*1.5)/3));
  });




});

