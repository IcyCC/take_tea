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
	/*
	$("button").hover(function(){
		$(this).css("background","#CDCDB4")
	},function(){
		$(this).css("background","none")
	});*/

	var cnt=0;
$("#Q button").click(function(){
		// $(this).css("background","#CDCDB4");
		switch(cnt){
		case 0:
			$("#question").text("您期待的功效有...");
			$("#button0").text("消脂减肥");
			$("#button1").text("治疗便秘");
			$("#button2").text("预防心血管疾病");
			$("#button3").text("治疗肠胃不适，降火去燥");
			cnt++;
			a = $(this).val();
			break;
		case 1:
			// alert(b+"  " + cnt);
			$("#question").text("您期望的口味是...");
			$("#button0").text("清爽");
			$("#button1").text("微苦");
			$("#button2").text("醇厚");
			$("#button3").text("浓烈");
			cnt++;
			b = $(this).val();
			
			break;
		case 2:
			c = $(this).val();
			// alert(cnt);
			cnt=0;
			$("#myModalLabel").text();
			$("#des").text(a+b+c);
			$('#myModal').modal('show');
			$("#question").text("您的年龄阶段为...");
			$("#button0").text("12-18");
			$("#button1").text("18-40");
			$("#button2").text("40-60");
			$("#button3").text("65以上");
			
			break;
		}
	});

 	// $("#Q2").hide();
 	// $("#Q3").hide();
 	// $(".REC1").hide();

 	// $("button.A1").click(function(){
 	// 	a = $(this).html();
 	// 	$("#Q2").show();
 	// });
 	// $("button.A2").click(function(){
 	// 	b = $(this).html();
 	// 	$("#Q3").show();
 	// });
 	// $("button.A3").click(function(){
 	// 	c =$(this).html();
		// alert(a+b+c);
		// $("#Q1").hide();
		// $("#Q2").hide();
		// $("#Q3").hide();
		// $(".REC1").show();
 	// });
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

