/* Sorta Sorting by Donny Bridgen 
	2015-09-04
*/

var interval = '';
var tempSortable = [];

var randomNumbersToGenerate = 0;
var sortSpeed = 200;

var sortType = '';
var time = 0;

var lines = true;

randomize();

/*
Sets lines enabled or disabled
*/

function setLines(){
	
	var line = document.getElementById('lines');
	
	lines = line.checked;
}

/*
Re-generate random numbers
*/
function randomize(){
	
	clearInterval(interval);
	
	var num = document.getElementById('amount');
	var speed = document.getElementById('speed');
	
	time = new Date().getTime();
	
	randomNumbersToGenerate = num.value;
	sortSpeed = speed.value;
	
	if (num == null || num.value/1 == null){
		randomNumbersToGenerate = 250;
	}
	
	if (speed == null || speed.value/1 == null){
		sortSpeed = 250;
	}
	
	tempSortable.length = randomNumbersToGenerate;
	for (var i = 0; i < randomNumbersToGenerate; i++){
		
		tempSortable[i] = Math.ceil(Math.random()*randomNumbersToGenerate);
	}	
}

/*
Choose which sorting algorithm to use.

@param list Array integer values
@param type String type of sort (bubble,shell)
*/
function sort(list,type){
	
	clearInterval(interval);
	
	sortType = type;
	
	if (type == 'bubble'){
		doBubble(list);
	}
	if (type == 'shell'){
		doShell(list);
	}
	
}

/*
Bubble sort function

@param list Array integer values to sort
@return millseconds to complete
*/
function doBubble(list){
	
	var needSwap = true;
	var swapCount = 0;
	
	interval = setInterval(function(){
		if(needSwap){
			needSwap = false;
			for (var i = 0; i < list.length-1; i++){
				
				if (list[i] > list[i+1]){
					var temp = list[i+1];
					list[i+1] = list[i];
					list[i] = temp;
					needSwap = true;
				}
				
			}
			swapCount += 1;
		}
	},sortSpeed);
}

/*
Shell sort function

@param list Array integer values to sort
@return milliseconds to complete
*/
function doShell(list){
	
	var needSwap = true;
	var swapCount = 0;
	var swapDistance = Math.floor(list.length * .10);
	
	interval = setInterval(function(){
		if(needSwap){
			needSwap = false;
			if (swapDistance > 1){
				swapDistance--;
			}
			for (var i = 0; i < list.length-swapDistance; i++){
				
				if (list[i] > list[i+swapDistance]){
					var temp = list[i+swapDistance];
					list[i+swapDistance] = list[i];
					list[i] = temp;
					needSwap = true;
				}
				
			}
			swapCount += 1;
		}
	},sortSpeed);
}