$(document).ready(function(){
	clock();
	var currentTime = "";
	var t;
	var timeDelay = 0;
	function clock(){
		var today = new Date();
		var hours = today.getHours();
		var minutes = today.getMinutes();
		var seconds = today.getSeconds();
		minutes = timeAdjust(minutes);
		seconds = timeAdjust(seconds);
		$('#time').html(hours + ":" + minutes + "." + seconds);
		currentTime = $('#time').html();
		if(seconds==00){
			$('#time').css('color', 'red');
		}else{
			$('#time').css('color', 'black');
		}
		// if(seconds==03){
		// 	$('#time').css('color', 'black');
		// }
		setTheTimeout();
		if(minutes==00){
			$('#time').css('color', 'blue');
		}
	}

	function setTheTimeout(){
		t = setTimeout(clock, 1000);
	}

	function timeAdjust(timeParameter){
		if(timeParameter < 10){
			timeParameter = "0" + timeParameter;
		}
		return timeParameter;

	}

	$('#stop').click(function(){
		clearTimeout(t);
		var d = new Date();
		timeDelay = d.getTime();
		function stopTime(){
			$('#time').html(currentTime);
			setTheTimeout();
		};

	});

	$("#start").click(function(){
		clock();
		var d = new Date();
		var currentMilliseconds = d.getTime();
		var lengthOfDelay = (currentMilliseconds-timeDelay)/1000;
		$('#time-paused').html("You paused the time for " + lengthOfDelay + " seconds.");


	})

})