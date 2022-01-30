
$(document).ready(function(){
    $('.had-ul li').click(function(e){
        e.preventDefault();
        var had_ul_idx = $(this).index();
        console.log(had_ul_idx);

        var had_con = $('.had-con');
        had_con.find('div:nth-child('+(had_ul_idx + 1)+')').toggleClass('active').siblings().removeClass('active');
    });

    $('.light-inner').click(function(){
        $('body').toggleClass('white');
        $('.light-click').find('p').toggleClass('black');

        var phothme = $('.photo').find('img');
        console.log(phothme);
        phothme.attr("src", function(index, attr){
            if (attr.match('assets/me2.png')){
                return attr.replace("assets/me2.png","assets/me1.png");
            } else {
                return attr.replace("assets/me1.png","assets/me2.png");
            }
        });

        var phothme2 = $('.who_text').find('img');
        console.log(phothme2);
        phothme2.attr("src", function(index, attr){
            if (attr.match('assets/me2.png')){
                return attr.replace("assets/me4.png","assets/me3.png");
            } else {
                return attr.replace("assets/me3.png","assets/me4.png");
            }
        });

        var lamp = $('.GG');
        console.log(lamp);
        lamp.attr("fill", function(index, attr){
            if (attr.match('#ffffff')){
                return attr.replace("#ffffff","#000000");
            } else {
                return attr.replace("#000000","#ffffff");
            }
        });

        $('.had-ul li a , .tech-label label , .ft-copy label').toggleClass('font-black');
        
    });
});