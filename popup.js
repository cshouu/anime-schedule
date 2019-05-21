$(function(){
	
	var bgPage=chrome.extension.getBackgroundPage();
	var day = new Date().getDay();
	
	// 左侧边栏
	$("aside>img").click(function(){
        $(this).addClass('active').siblings('img').removeClass('active');
        var index = $(this).index();
		$('section>div').eq(index).css("display","block").siblings("div").css("display","none");
		// 点击dilidili
		if(index == 0){
			$('#dilidiv>nav>span').eq(day-1).css("color","black");
			$('#dilidiv>div').html(bgPage.getDiliHtml());
			$('#dilidiv>a').attr('target','_blank');
			$('#dilidiv>div>ul').children('li').eq(day-1).show().siblings().hide();
		}
		// 点击腾讯视频
		if(index == 1){
			$('#qqdiv>nav>span').eq(0).css("color","black");
			$('#qqdiv>div').html(bgPage.getQQHtml());
			$('#qqdiv>div>div').eq(0).show().siblings().hide();
		}
		// 点击微博
		if(index == 2){
			$('#weibodiv>nav>span').eq(0).css("color","black");
			$('#weibodiv>div').html(bgPage.getWeiboHtml());
			$('#weibodiv>div>tr').slice(11).hide();
		}
    })
	
	// dilidili
	$('#dilidiv>nav>span').click(function (){
		$('#dilidiv>nav>span').css("color","#f45a8d");
		$(this).css("color","black");
		$('#dilidiv>div>ul').children('li').eq($(this).index()).show().siblings().hide();
	});
	// 腾讯视频
	$('#qqdiv>nav>span').click(function (){
		$('#qqdiv>nav>span').css("color","#f45a8d");
		$(this).css("color","black");
		$('#qqdiv>div>div').eq($(this).index()).show().siblings().hide();
	});
	// 微博
	$('#weibodiv>nav>span').click(function (){
		$('#weibodiv>nav>span').css("color","#f45a8d");
		$(this).css("color","black");
		$('#weibodiv>div>tr').slice(1).hide();
		$('#weibodiv>div>tr').slice($(this).index() * 10 + 1,($(this).index() + 1) * 10 + 1).show();
	});
	
	// 初始化
	$('#dilidiv>nav>span').eq(day-1).css("color","black");
	$('#dilidiv>div').html(bgPage.getDiliHtml());
	$('#dilidiv>a').attr('target','_blank');
	$('#dilidiv>div>ul').children('li').eq(day-1).show().siblings().hide();
	$('section>div').eq(0).show().siblings().hide();
});
