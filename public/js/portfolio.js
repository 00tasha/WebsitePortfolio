

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".logo").addClass("logo-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".logo").removeClass("logo-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

 $(document).ready(function() {

	
	$("a.bioImg").fancybox({ 
		'padding'		:	0,
		'title'			:	'',
		'openEasing'      :	'swing',
		'closeEasing'    :	'swing',
		'openEffect'	:	'elastic',
		'closeEffect'	:	'elastic',
		'openSpeed'		:	600, 
		'closeSpeed'	:	200, 
		'overlayShow'	:	false
	});
	
	$("a.sketchImg").fancybox({
		'padding'		:	0,
		'openEasing'      :	'swing',
		'closeEasing'    :	'swing',
		'openEffect'	:	'elastic',
		'closeEffect'	:	'elastic',
		'openSpeed'		:	600, 
		'closeSpeed'	:	200, 
		'overlayShow'	:	false
	});

	$("a.compImg").fancybox({
		'padding'		:	0,
		'openEasing'      :	'swing',
		'closeEasing'    :	'swing',
		'openEffect'	:	'elastic',
		'closeEffect'	:	'elastic',
		'openSpeed'		:	600, 
		'closeSpeed'	:	200, 
		'overlayShow'	:	false
	});
	
	$("a.wireImg").fancybox({
		'padding'		:	0,
		'openEasing'      :	'swing',
		'closeEasing'    :	'swing',
		'openEffect'	:	'elastic',
		'closeEffect'	:	'elastic',
		'openSpeed'		:	600, 
		'closeSpeed'	:	200, 
		'overlayShow'	:	false
	});

	$("a.prodImg").fancybox({
		'padding'		:	0,
		'openEasing'      :	'swing',
		'closeEasing'    :	'swing',
		'openEffect'	:	'elastic',
		'closeEffect'	:	'elastic',
		'openSpeed'		:	600, 
		'closeSpeed'	:	200, 
		'overlayShow'	:	false
	});	
});