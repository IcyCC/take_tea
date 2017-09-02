var a = 2;
$(document).ready(function(){
  var myDate = new Date();
  var id = myDate.getDate();
  // alert(id);
  $.ajax({
      url : "/tea",
      type : "get",
      dataType : "json",
      data : "id=" + id,
      
      success : function(returnVal) {
        // alert(JSON.stringify(returnVal));
        $("#tea_name").text(returnVal.result[0].name);
        $("#tea_img").attr("src", returnVal.result[0].image_url);
        $("#tea_taste").text( returnVal.result[0].taste);
        $("#tea_function").text( returnVal.result[0].function);

      }
      
  });
  $.ajax({
      url : "/tea",
      type : "get",
      dataType : "json",
      data : "id=" + (id+1),
      
      success : function(returnVal) {
        // alert(JSON.stringify(returnVal));
        $("#tea_name1").text(returnVal.result[0].name);
        $("#tea_img1").attr("src", returnVal.result[0].image_url);
        $("#tea_taste1").text( returnVal.result[0].taste);
        $("#tea_function1").text( returnVal.result[0].function);

      }
      
  });
  $(".introduce").hide();
  $(".photo").click(function(){
  if(a ==1)
  {
    $(this).find(".introduce").hide();
    $(this).css({"width":"250px","height":"250px"});
    $(this).find("img").css({"width":"250px","height":"250px"});
    a=2;
  }
  else{
    $(this).find(".introduce").show();
    $(this).css({"width":"70px","height":"70px"});
    $(this).find("img").css({"width":"70px","height":"70px"});
    a=1;
  }
  });
});
