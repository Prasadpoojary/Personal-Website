$(window).on("load",function(){
$('.loading').css('display','none');

var startingPos;
var endPos;

$(document).on('touchstart',function (e) { 
   startingPos=e.touches[0].pageX;
   console.log(startingPos);


$(document).on('touchmove',function (e) { 
    endPos=e.touches[0].pageX;
    console.log(endPos);

    if((endPos-startingPos)>150)
{
    $('nav').addClass('swipe');
}
else
{
    $('nav').removeClass('swipe');
}

});
});






function tagAnim()
{
   $('#born').animate({"opacity":"1","margin-right":"0px"},1500);
   $('#code').animate({"opacity":"1","margin-left":"0px"},1500);
   $('#to').animate({"opacity":"1"},2000,dnic);
}

function picAnim()
{
    $('#profilePic').animate({"opacity":"0"},5000);
    $('#profilePic').animate({"opacity":"1","margin-top":"30px"},2000);

}


function dnic()
{
    $('.nick').animate({"opacity":"1"},1000);
    $('.nick').animate({"opacity":"0"},500);
    $('.nick').animate({"opacity":"1"},3500);
}

function nameColorChange()
{
    $("#sf,#a,#n,#d,#e,#sl,#h").css("color","#646b8a");
}
function sandesh()
{
    $('#sf').animate({"opacity":"0"},3500);
    redShadow()
    $('#a').animate({"opacity":"0"},3500);
    $('#n').animate({"opacity":"0"},3500);
    $('#d').animate({"opacity":"0"},3500);
    $('#e').animate({"opacity":"0"},3500);
    $('#sl').animate({"opacity":"0"},3500);
    $('#h').animate({"opacity":"0"},3500);
    $('#sf').animate({"opacity":"1"},500);
    $('#a').animate({"opacity":"1"},1400);
    $('#n').animate({"opacity":"1"},2300);
    $('#d').animate({"opacity":"1"},3100);
    $('#e').animate({"opacity":"1"},4000);
    $('#sl').animate({"opacity":"1"},4900);
    $('#h').animate({"opacity":"1"},5800);
   
    $('#sf').animate({"opacity":"0.2"},1500,nameColorChange);
    $('#a').animate({"opacity":"0.2"},1500);
    $('#n').animate({"opacity":"0.2"},1500);
    $('#d').animate({"opacity":"0.2"},1500);
    $('#e').animate({"opacity":"0.2"},1500);
    $('#sl').animate({"opacity":"0.2"},1500);
    $('#h').animate({"opacity":"0.2"},1500);
    $('#sf').animate({"opacity":"1"},1500);
    $('#a').animate({"opacity":"1"},1500);
    $('#n').animate({"opacity":"1"},1500);
    $('#d').animate({"opacity":"1"},1500);
    $('#e').animate({"opacity":"1"},1500);
    $('#sl').animate({"opacity":"1"},1500);
    $('#h').animate({"opacity":"1"},1500);

    
}

function nameAnim()
{    
     
    $('#hi').animate({"opacity":"0,"},3000);
    $('#comma').animate({"opacity":"0"},3000);
    $('#i,#am').animate({"opacity":"0"},3000);
    $('#hi').animate({"opacity":"1","margin-right":"0px"},1500);
    $('#comma').animate({"opacity":"1"},1500);
    $('#i,#am').animate({"opacity":"1","margin-left":"0px"},1500);
    sandesh();
}

// ***********BirthDay Wish***********

function wishHim()
{
    $('.wishCont').css('display','block');
    var bannerHeight=$('.wishBanner').height()/2;
    $('.wishBanner').animate({'opacity':'1','margin-top':bannerHeight+'px'});
}


$('.closeWishBanner').click(function(){
    $('.wishBanner').animate({'opacity':'0'},1000);
    $('.wishCont').css('display','none');
});


// ***********************************

function redShadow()
{
    $('#profilePic').animate({"opacity":"0"},600);
    $('#profilePic').animate({"opacity":"1"},2000,wishHim);
}

function nickAnim()
{
    $('#call').animate({"opacity":"0"},2500);
    $('#me').animate({"opacity":"0"},2500);
    $('#sandy').animate({"opacity":"0"},2500);
    $('#call').animate({"opacity":"1","margin-left":"0px"},500);
    $('#me').animate({"opacity":"1","top":"0px"},500);
    $('#sandy').animate({"opacity":"1","margin-left":"0px"},500);
}
function webfun()
{
    $(this).css('color','#8c02db');
}
function developerfun()
{
    $(this).css('color','#fff');
}
function disableBorder()
{
    $('.dev h3').css("border","none");
    $('#web').fadeOut(300,webfun);
    $('#developer').fadeOut(380,developerfun);
    $('#web').fadeIn(150);
    $('#developer').fadeIn(230);
}
function devAnim()
{
    $('.dev').delay(5000);
    $('.dev').addClass('ddev');
    // $('.dev h3').animate({"opacity":"0"},200);
    $('.ddev h3').animate({"opacity":"1"},6000,disableBorder);
}  


// Project Section Animation is Goes Here

$('.view').click(function(){
    $(this).css('transition','none');
    $(this).animate({'opacity':'0'},500)
    $(this).siblings('.pid,.pName').animate({'opacity':'0'},500)
    $(this).parent('.pboxCont').children('.hiddenProDetail').css('display','block');
    $(this).parent('.pboxCont').children('.hiddenProDetail').animate({'opacity':'1'},1000)

});

$('.hiddenClose').click(function(){
    $(this).parent('.hiddenButtonContainer').parent('.hiddenProDetail').animate({'opacity':'0'},500)
    $(this).parent('.hiddenButtonContainer').parent('.hiddenProDetail').css('display','none');
    $(this).parent('.hiddenButtonContainer').parent('.hiddenProDetail').parent('.pboxCont').children('.pid,.pName,.view').animate({'opacity':'1'},500)
    $(this).parent('.hiddenButtonContainer').parent('.hiddenProDetail').parent('.pboxCont').children('.view').css('transition','.3s ease-in-out');

});

// Review Section Animation is Goes Here

$('.irOne textarea').on('input',function(){
    let curCount=$(this).val().length;
    let checkValid=$(this).val().trim();
    $('.irTextCount').html(curCount);
    if(curCount<=200 && curCount>=1 && checkValid!="")
    {
        $('.irTextCount').css('color','#00ff15');
        $('.irOne button').css('transition','.3s ease-in-out')
        .css('visibility','visible').css('transform','translateY(20px)');
       
    }
    else
    {
        $('.irTextCount').css('color','#ff0000');
        $('.irOne button').css('transform','translateY(-50px)').css('visibility','hidden').css('transition','none')

    }
});

$('.irOneBtn').click(function(){
    $('.irOne').css('display','none');
    $('.irTwo').css('display','block');

});

$('.irTwoBtn').click(function(){
    $('.irTwo').css('display','none');
    $('.irThree').css('display','block');

});

// search Animation

$('#searchInput').on('input',function(){
    $(this).attr('list','searchDataCont');
});

$('#searchInput').on('blur',function(){
    $(this).attr('list','');
});


$('.searchBtn').click(function(){
    $('.searchBase').css('display','block')
    .animate({'opacity':'1'},300);
    $('#searchInput').focus();
});

function searchDis()
{
    $('.searchBase').css('display','none');
}

$('.searchClose').click(function(){
    $('.searchBase').animate({'opacity':'0'},300,searchDis)
   
});

$('.search').click(function(){
    $('.searchBase').animate({'opacity':'0'},0,searchDis)
    let value='#'+$('#searchInput').val().toLowerCase();
    $(this).attr('href', value);
    $("#searchInput").attr('list','');
});

// About Animation

function aboutAnim()
{
    $('.abouttag').animate({'opacity':'1'},3000);
    $('.aboutContainer').animate({'opacity':'1','margin-left':'0px'},1200);
}

function skillAnim()
{
    $('.sboxCont').each(function(){
        $('.sboxCont').delay(300);
        $(this).animate({'opacity':'1'},500);
        
    });
    
}

function educationAnim()
{
    $('.eduDetailsCont').animate({'opacity':'1'},100);
    $('.education a').animate({'opacity':'1'},350);
    
}
    
function projectAnim()
{
    $('.pboxCont').each(function(){
        $('.pboxCont').delay(300);
        $(this).animate({'opacity':'1'},500);
    });
    
}


function reviewAnim()
{
    $('.urCard').each(function(){
        $('.urCard').delay(700);
        $(this).animate({'opacity':'1'},500);
    });

}


var about=$('.about').offset().top;
about=about-($('.home').height()/2)-50;
if($(window).width()>=750)
{
    var skill=$('.skill').offset().top;
    skill=skill-($('.about').height());
}
else
{
    var skill=$('.skill').offset().top;
    skill=skill-($('.about').height()/2)+50;
}


var education=$('.education').offset().top;
education=education-($('.skill').height()/2)-50;

var project=$('.project').offset().top;
project=project-($('.education').height()/2)-50;

var contact=$('.contact').offset().top;
contact=contact-($('.project').height()/2);

if($(window).width()>=750)
{
var review=$('.review').offset().top;
review=review-($('.contact').height());
}
else
{
    var review=$('.review').offset().top;
    review=review-($('.contact').height()/2)+50;
}
$(document).on('scroll',function(){
    
   var sct=$(this).scrollTop();
   if(sct<about-200)
   {
        $('.abouttag').removeClass('abouttagAnim');
        $('.aboutContainer').removeClass('aboutContainerAnim');
        $('.skill .skilltag').removeClass('skilltagAnim');
        $('.edutag').removeClass('edutagAnim');
        $('.projecttag').removeClass('projecttagAnim');
        $('.contacttag').removeClass('contacttagAnim');
        $('.icOne').removeClass('icOneAnim');
        $('.address').removeClass('addressAnim');
        $('.icTwo').removeClass('icTwoAnim');
        $('.reviewtag').removeClass('reviewtagAnim');
        $('.userReviewPost').removeClass('userReviewPostAnim');
        $('.setPercentVal').html('0');
   
    }

   if(sct>=about && sct <=skill)
   {
       $('.abouttag').addClass('abouttagAnim');
       $('.aboutContainer').addClass('aboutContainerAnim');
       $('.skill .skilltag').removeClass('skilltagAnim');
       $('.edutag').removeClass('edutagAnim');
       $('.projecttag').removeClass('projecttagAnim');
       $('.contacttag').removeClass('contacttagAnim');
       $('.icOne').removeClass('icOneAnim');
       $('.address').removeClass('addressAnim');
       $('.icTwo').removeClass('icTwoAnim');
       $('.reviewtag').removeClass('reviewtagAnim');
       $('.userReviewPost').removeClass('userReviewPostAnim');
       $('.setPercentVal').html('0');
   }
  
   if(sct>=skill && sct <=education)
   {
        $('.abouttag').removeClass('abouttagAnim');
        $('.aboutContainer').removeClass('aboutContainerAnim');
        $('.skill .skilltag').addClass('skilltagAnim');
        skillAnim();
        if($('.setPercentVal').html()=='0')
        {
        $('.getPercentVal').each(function(){
   
            let get = $(this).val();
            let val=0;
            let set = $(this).siblings('h1').children('.setPercentVal');
            function checkPercent()
            {
                if(val==get)
                {
                    return false;
                }
                set.html(++val);
            set.animate({'opacity':'1'},5,checkPercent);
            }
           
            set.html(++val);
            set.animate({'opacity':'1'},5,checkPercent);
        });
        }
        $('.edutag').removeClass('edutagAnim');
        $('.projecttag').removeClass('projecttagAnim');
        $('.contacttag').removeClass('contacttagAnim');
        $('.icOne').removeClass('icOneAnim');
        $('.address').removeClass('addressAnim');
        $('.icTwo').removeClass('icTwoAnim');
        $('.reviewtag').removeClass('reviewtagAnim');
        $('.userReviewPost').removeClass('userReviewPostAnim');

   }
   if(sct>=education && sct <=project)
   {
        $('.edutag').addClass('edutagAnim');
        educationAnim();
        $('.skill .skilltag').removeClass('skilltagAnim');
        $('.abouttag').removeClass('abouttagAnim');
        $('.aboutContainer').removeClass('aboutContainerAnim');
        $('.projecttag').removeClass('projecttagAnim');
        $('.contacttag').removeClass('contacttagAnim');
        $('.icOne').removeClass('icOneAnim');
        $('.address').removeClass('addressAnim');
        $('.icTwo').removeClass('icTwoAnim');
        $('.reviewtag').removeClass('reviewtagAnim');
        $('.userReviewPost').removeClass('userReviewPostAnim');
        $('.setPercentVal').html('0');

   }
   if(sct>=project && sct <=contact)
   {
    $('.projecttag').addClass('projecttagAnim');
        projectAnim()
        $('.abouttag').removeClass('abouttagAnim');
        $('.aboutContainer').removeClass('aboutContainerAnim');
        $('.skill .skilltag').removeClass('skilltagAnim');
        $('.edutag').removeClass('edutagAnim');
        $('.contacttag').removeClass('contacttagAnim');
        $('.icOne').removeClass('icOneAnim');
        $('.address').removeClass('addressAnim');
        $('.icTwo').removeClass('icTwoAnim');
        $('.reviewtag').removeClass('reviewtagAnim');
        $('.userReviewPost').removeClass('userReviewPostAnim');
        $('.setPercentVal').html('0');

    }
   if(sct>=contact && sct <=review)
   {
        $('.contacttag').addClass('contacttagAnim');
        $('.icOne').addClass('icOneAnim');
        $('.address').addClass('addressAnim');
        $('.icTwo').addClass('icTwoAnim');
        $('.abouttag').removeClass('abouttagAnim');
        $('.aboutContainer').removeClass('aboutContainerAnim');
        $('.skill .skilltag').removeClass('skilltagAnim');
        $('.edutag').removeClass('edutagAnim');
        $('.projecttag').removeClass('projecttagAnim');
        $('.reviewtag').removeClass('reviewtagAnim');
        $('.userReviewPost').removeClass('userReviewPostAnim');
        $('.setPercentVal').html('0');

   }
   if(sct>=review)
   {
        $('.reviewtag').addClass('reviewtagAnim');
        $('.userReviewPost').addClass('userReviewPostAnim');
        reviewAnim();
        $('.abouttag').removeClass('abouttagAnim');
        $('.aboutContainer').removeClass('aboutContainerAnim');
        $('.skill .skilltag').removeClass('skilltagAnim');
        $('.edutag').removeClass('edutagAnim');
        $('.projecttag').removeClass('projecttagAnim');
        $('.contacttag').removeClass('contacttagAnim');
        $('.icOne').removeClass('icOneAnim');
        $('.address').removeClass('addressAnim');
        $('.icTwo').removeClass('icTwoAnim');
        $('.setPercentVal').html('0');
       
    }




});


console.log("window width  : "+$(window).width());



tagAnim();// born to code
picAnim();// Profile Pic 
nameAnim();// Name animation Hi, I am Sandesh
nickAnim();// Nick name animation call me Sandy
devAnim(); // web developer






});

