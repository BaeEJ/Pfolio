$(function(){
  // $("nav ul li").each(function(){
  //   var num = $(this).find("a");
  //   console.log($(num.hash))
  // })

  $("nav ul li a, .back_to_top a, .footer_top a,a.button").click(function(e){

    var thisElem = $(this.hash);
    $("html,body").stop();
    $("html,body").animate({scrollTop : thisElem.offset().top},1500);
    // e.preventDefault();
    return false;
  });//clickfunction
});//document ready
