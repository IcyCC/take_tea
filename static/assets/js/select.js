var a,b,c;

/*function SubMit(){
	$(document).ready(function(){
        $.getJSON("#",function(result){
            $.each(result, function(i, field){
                $("div").append(field + " ");
            });
    });
}); 
}*/

$(document).ready(function(){

	var cnt=0;
	$("#Q button").click(function(){

		switch(cnt){
		case 0:
			a = $(this).val();
			$("#question").text("您期待的功效有...");
			$("#button0").text("消脂减肥");
			$("#button1").text("治疗便秘");
			$("#button2").text("预防心血管疾病");
			$("#button3").text("治疗肠胃不适，降火去燥");
			$("#button0").attr( "value","消脂减肥");
			$("#button1").attr( "value","治疗便秘");
			$("#button2").attr( "value","预防心血管疾病");
			$("#button3").attr( "value","治疗肠胃不适，降火去燥");
			cnt++;
			break;
		case 1:
			b = $(this).val();
			$("#question").text("您期望的口味是...");
			$("#button0").text("清爽");
			$("#button1").text("微苦");
			$("#button2").text("醇厚");
			$("#button3").text("浓烈");
			$("#button0").attr("value", "清爽");
			$("#button1").attr("value", "微苦");
			$("#button2").attr("value", "醇厚");
			$("#button3").attr("value", "浓烈");
			cnt++;
			
			break;
		case 2:
			c = $(this).val();
			cnt=0;
			$("#myModalLabel").text();
			$("#question").text("您的年龄阶段为...");
			$("#button0").text("12-18");
			$("#button1").text("18-40");
			$("#button2").text("40-60");
			$("#button3").text("65以上");
			$("#button0").attr("value","15");
			$("#button1").attr("value", "20");
			$("#button2").attr("value","50");
			$("#button3").attr("value","61");
			$.ajax({
		        url : "/tea_answer",
		        type : "get",
		        dataType : "json",
		        data : "age=" + a + "&function_q=" + b + "&taste_q=" + c,
		        
		        success : function(returnVal) {
		        	var num = returnVal.result.length;
		        	var index = Math.floor(Math.random()*num);
		            $("#myModalLabel").text(returnVal.result[index].name);
		            $("#des1").text(returnVal.result[index].taste);
		            $("#des2").text(returnVal.result[index].function);
		        }
		        
		    });
			$('#myModal').modal('show');
			break;
		}
	});


});

/*$.ajax({
        url : '#',
        type : "post",
        dataType : "json",
        data : 
        cache : false,
        async : false,
        success : function(data, textStatus, jqXHR) {
            if ('success' == textStatus) {
                debugger;
                layer.msg(data.message, {time: 2000, icon:6});
                 
                if(1 == data.status){
                    setTimeout(function(){
                        window.location.href = 'informationTemplateList.do';
                    }, 2000);
                }
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            layer.msg("textStatus = " + textStatus + ", XMLHttpRequest.status = " + XMLHttpRequest.status + ", XMLHttpRequest.readyState = " + XMLHttpRequest.readyState);
        }
    });
});*/

