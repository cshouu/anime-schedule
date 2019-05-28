function getDiliHtml(){
	var value;
	$.ajax({
		url:'http://www.dilidili.name',
		type:"GET",
		dataType:"html",
		cache:false,
		async:false,
		success:function(result){
			var $result = $("<code></code>").append($(result));
			var $html = $("div.main", $result).eq(0)
						.children("div.side")
						.children("div.change").eq(1)
						.children().eq(0);
			$html.find("a").each(function(){
				$(this).attr('target','_blank');
			});
			value = $html.html();
		}
	});
	return value;
}
function getQQHtml(){
	var value;
	$.ajax({
		url:'https://v.qq.com/channel/cartoon',
		type:"GET",
		dataType:"html",
		cache:false,
		async:false,
		success:function(result){
			var $result = $("<code></code>").append($(result));
			var $html = $("div#v_cartoon_days_broadcast", $result).children().eq(1);
			$html.find("img").each(function(){
				if(typeof($(this).attr("lz_next")) == "undefined"){
					$(this).attr("src","https:" + $(this).attr("src"));
				}else{
					$(this).attr("src","https:" + $(this).attr("lz_next"));
				}
			});
			$html.children().each(function(){
				$(this).children().each(function(){
					$(this).children()[1].remove();
				});
			});
			value = $html.html();
		}
	});
	return value;
}
function getWeiboHtml(){
	var value;
	$.ajax({
		url:'https://s.weibo.com/top/summary?cate=realtimehot',
		type:"GET",
		dataType:"html",
		cache:false,
		async:false,
		success:function(result){
			var $result = $("<code></code>").append($(result));
			var $html = $("#pl_top_realtimehot", $result).find("tbody");
			$html.find("a").each(function(){
				$(this).attr("href","https://s.weibo.com" + $(this).attr("href"));
			});
			$html.find("img").each(function(){
				$(this).attr("src","https:" + $(this).attr("src"));
			});
			value = $html.html();
		}
	});
	return value;
}
function get91Html(day){
	var value;
	var url = "https://91mjw.com/schedule?";
	if(day == 1)  url += "Monday";
	if(day == 2)  url += "Tuesday";
	if(day == 3)  url += "Wednesday";
	if(day == 4)  url += "Thursday";
	if(day == 5)  url += "Friday";
	if(day == 6)  url += "Saturday";
	if(day == 0)  url += "Sunday";
	$.ajax({
		url: url,
		type:"POST",
		dataType:"html",
		cache:false,
		async:false,
		success:function(result){
			var $result = $("<code></code>").append($(result));
			var $html = $("div.m-movies", $result);
			$html.find("img").each(function(){
				$(this).attr("src", $(this).attr("data-original"));
			});
			$html.find("a").each(function(){
				$(this).attr('target','_blank');
			});
			value = $html.html();
		}
	});
	return value;
}