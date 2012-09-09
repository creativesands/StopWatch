$(function(){
	var hours = $('.hoursCount>p');
	var mins = $('.minutesCount>p');
	var secs = $('.secondsCount>p');
	var hCount = 1, mCount = 1, sCount = 1;
	var stop = false;
	var timer;

	function updateDisplay(element, count){
		element.fadeTo('slow', 0, function(){
			if(count < 10){
				element.html('0'+count);
			}
			else{
				element.html(count);
			}
		});
		element.fadeTo('fast', 1, 0);
	}

	function updateClock(){
		timer = setInterval(function(){
			if(sCount < 60){
				updateDisplay(secs, sCount++);
			}
			else{
				sCount = 0;
				updateDisplay(secs, sCount++);
				if(mCount < 60){
					updateDisplay(mins, mCount++);
				}
				else{
					mCount = 0;
					updateDisplay(mins, mCount++);
					updateDisplay(hours, hCount++);	
				}
			}
		}, 1000);
	}

	$('.startButton').toggle(function(){
		$('.startLabel>p').html('Stop');
		updateClock();
	}, function(){
		$('.startLabel>p').html('Start');
		clearInterval(timer);
	});

	$('.resetButton').click(function(){
		sCount = mCount = hCount = 1;
		updateDisplay(secs, 0);
		updateDisplay(mins, 0);
		updateDisplay(hours, 0);
		$('.startLabel>p').html('Start');
		clearInterval(timer);
	});
})