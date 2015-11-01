/*
	us-main.js	
	版本号：
			1.1.1 	created by yancey qq:1352667433	

*/

$(function(){

			/*评论框宽度*/
			var $offsetW = $('.critic-content .user').width() + 30;
			var $criticW = $('.critic-content .option').width();
			$('.critic .msg').outerWidth($criticW-$offsetW);
			console.log($offsetW);
	
});