// JavaScript Document
$(function(){
		$('#num li').mouseenter(function(){
			//获得光标指向的li的下标
			var index = $('#num li').index(this);
			//滚动图片
			showImage(index);
		}).eq(0).mouseenter();
		var i = 0;
		var taskId;
		$('#d1').hover(function(){
			//光标进入，停止滚动
			clearInterval(taskId);
		},function(){
			//光标离开，开始滚动
			taskId = setInterval(function(){
				showImage(i);
				i++;
				if(i==5){
					i = 0;
				}
			},2000);
		}).mouseleave();
	});
	function showImage(index){
		//stop(true):先清空当前对象上累积的所有的动画。
		$('#adv').stop(true).animate({'top':-index * 300},1000);
		//加亮光标指向的li
		$('#num li').eq(index).addClass('on')
		.siblings().removeClass('on');
	}