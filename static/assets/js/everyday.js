var a = 2;
$(document).ready(function(){
  $(".introduce").hide();
    $(".photo").click(function(){
    if(a ==1)
    {
      $(".introduce").hide();
      $(".photo").css({"width":"250px","height":"250px"})
      $(".photo img").css({"width":"250px","height":"250px"})
      a=2;
    }
    else{
      $(".introduce").show();
      $(".photo").css({"width":"70px","height":"70px"})
      $(".photo img").css({"width":"70px","height":"70px"})
      a=1;
    }
  });
});