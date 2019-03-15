// 获取时间表html数据
function getHtml(){
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
			value = $html.html();
		}
	});
	return value;
}
