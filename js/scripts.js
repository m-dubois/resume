"use strict";

function callbackOnSkills() {
	
	$('.item-skills').each(function(){
		var newWidth = $(this).width() * $(this).data('percent');
		$(this).width(0);
	    $(this).animate({
	        width: newWidth,
	    }, 1000);
	});
}


function callbackOnIcons() {
	$('.icons-red').each(function(){
		var height = $(this).height();
	    $(this).animate({
	        height: 14,
	    }, 2000);
	});
}


var callback = function(){
	callbackOnSkills();
	callbackOnIcons();
};

$(document).ready(callback);

var resize;
window.onresize = function() {
	clearTimeout(resize);
	resize = setTimeout(function(){
		callback();
	}, 100);
};
