document.addEventListener('DOMContentLoaded', function () {
	var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
		  typeSpeed: 20,
		  loop: true,
		  backSpeed: 50,
		  loopCount: Infinity
	});
	
	document.querySelector('.toggle').addEventListener('click', function () {
    		typed.toggle();
  	});
		
});

$(document).ready(function() {
  var btn = $(".play-pause");
  btn.click(function() {
    btn.toggleClass("paused");
    return false;
  });
});
