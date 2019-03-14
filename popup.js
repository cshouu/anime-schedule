$(function(){
	// 点击导航栏后设置外观，切换显示相应时间的信息
	$('span').click(function (){
		$('span').css("color","#f45a8d");
		$(this).css("color","black");
		$('#content>ul').children('li').eq($(this).index()).show().siblings().hide();
	});
	
	// 把从后台返回的数据填入div
	var bgPage=chrome.extension.getBackgroundPage();
	$('#content').html(bgPage.getHtml());
	$('a').attr('target','_blank');
	
	// 初始化设置导航条样式，显示相应时间的更新信息
	var day = new Date().getDay();
	$('span').eq(day-1).css("color","black");
	$('#content>ul').children('li').eq(day-1).show().siblings().hide();
});