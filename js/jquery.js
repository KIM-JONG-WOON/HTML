$(function(){

 let width = $('#topCon_u>li').width();
 console.log(width);
 let count = $('#topCon_u>li').length;

 let boxWidth = width*count;
 $('#topCon_u').width(boxWidth);


    setInterval(function(){
        $('#topCon_u').animate({'margin-left' : -width}, 1000, function(){
            $('#topCon_u>li:first').insertAfter('#topCon_u>li:last');
            
        });
     }, 3000);






 $('#iconBox>ul>li').hover(function(){
    $(this).css("transform",'scale(1.1)');
    $(this).siblings('li').css("transform",'scale(1)');

 });


 $('.ib_List').width(2400);
    setInterval(function(){
        $('.ib_List').animate({'left' : -400}, 1000, function(){
            $('.ib_List>li:first').insertAfter('.ib_List>li:last');
            
        });
     }, 3000);
 
 
});