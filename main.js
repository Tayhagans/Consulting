$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);
 
});

 $(document).ready(function() {
            $('.faq_question').click(function() {
                if ($(this).parent().is('.open')) {
                    $(this).closest('.faq').find('.faq_answer_container').slideUp();
                    $(this).closest('.faq').removeClass('open');
                } else {
                    $('.faq_answer_container').slideUp();
                    $('.faq').removeClass('open');
                    $(this).closest('.faq').find('.faq_answer_container').slideDown();
                    $(this).closest('.faq').addClass('open');
                }
            });
        });



//  $(document).ready(function() {

//   $('.faq_question').click(function() {

//     if ($(this).parent().is('.open')){
//       $(this).closest('.faq').find('.faq_answer_container').animate({'height':'0'},500);
//       $(this).closest('.faq').removeClass('open');

//       }else{
//         var newHeight =$(this).closest('.faq').find('.faq_answer').height() +'px';
//         $(this).closest('.faq').find('.faq_answer_container').animate({'height':newHeight},500);
//         $(this).closest('.faq').addClass('open');
//       }

//   });

// });

 window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
