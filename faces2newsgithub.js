// ==UserScript==
// @name       faces2newsgithub.js
// @namespace  https://github.com/alexandregz/
// @version    0.1
// @description  put avatars in the news feed page from github
// @match      https://github.com/
// @copyright  2014+, Alexandre Espinosa Menor
// ==/UserScript==

// ToDo
//  check to make only one ajax petition for user
//  be careful with css and html
//  more useful (not only for news feed, for example)



$('.news .alert .body .simple .title a:not(".css-truncate")').each(function(){
	var l = $(this).parent();
	
	$.ajax({
		url: $(this).html(),
		success: function(data) { 
			l.prepend( '<img src="' +$(data).filter('meta[property="og\:image"]').attr('content')+ '" width=20 height=20 /> ' ); 
		}
	})
});
