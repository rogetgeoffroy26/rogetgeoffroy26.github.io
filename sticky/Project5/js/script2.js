//Endless Scroll Script
function yHandler(){
	var wrap = document.getElementById('wrap');
	var contentHeight = wrap.offsetHeight;
	var yOffset = window.pageYOffset; 
	var y = yOffset + window.innerHeight;
	if(y >= contentHeight){
		// Ajax call to get more dynamic data goes here
		wrap.innerHTML += '<div class="newData"></div>';
		wrap.innerHTML += '<div class="newData2"></div>';
		wrap.innerHTML += '<div class="newData3"></div>';

	}
	}
window.onscroll = yHandler;

//End



