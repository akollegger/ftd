/* Theme Blossom - Custom scripts */
jQuery(document).ready(function($) {
	$("#navigation ul.navigation > li:last").addClass("last");
	$("#navigation ul.navigation ul > li:first-child").addClass("first");
	$("#navigation ul.navigation ul > li:last-child").addClass("last");
	dropdownMenu();

	// blockquote
	$('blockquote, #sidebar .quote').each(function() {$(this).find('p').eq(0).addClass('first');});
	$('blockquote, #sidebar .quote').append('<span class="rightQuote"></span>');
	
	// noBorder, noPadding, noMargin divs
	$('#news .wide:last').addClass('noborder');
	$('#news .narrow:nth-child(3n)').addClass('last');
	
	$('#gallery .thumbHolder:nth-child(3n+2)').addClass('last');
	$('#videos .thumb:nth-child(4n+4)').addClass('last').after('<div class="horDashed"></div>');
	$('#videos .horDashed:last, #contactExtra ul li:last').addClass('noborder');
	
	// full height header
	if ($('#header').hasClass('fullHeight')) {
		var windowHeight = $(window).height();
		if (windowHeight > 680) {
			$('html').css({height: '100%'});
			$('body').css({height: '100%'});
			$('#header').css({height: '100%'});
		} else {
			$('#header').css({height: 680});
		}
		
		// logoBigMargin = parseInt((windowHeight - 450)/2);
		logoBigMargin = 50
		if (logoBigMargin < 50) {
			logoBigMargin = 50;
		}
		
		$('#logoBig').css({marginTop: logoBigMargin});
	};
	
	$('#content .caption, #sidebar > div.box').wrapInner('<div></div>');
	
	// FAQ
	$('.faq div, .faq2 div').hide();
	$('.faq h4').click(function() {
		if ($(this).parent().hasClass('inactive')) {
			$(this).parent().removeClass('inactive').addClass('active');
			$(this).siblings('div').slideDown('slow');
		} else {
			$(this).parent().removeClass('active').addClass('inactive');
			$(this).siblings('div').slideUp('slow');
		}
	});
	$('.faq2 h4').click(function() {
		if ($(this).parent().hasClass('inactive')) {
			$(this).parent().removeClass('inactive').addClass('active');
			$(this).siblings('div').slideDown('slow');
			$(this).parent().siblings().removeClass('active').addClass('inactive').children('div').slideUp('normal');
		} else {
			$(this).parent().removeClass('active').addClass('inactive');
			$(this).siblings('div').slideUp('slow');
		}
	});
	
		
	// effects for non-IE browsers
	if ( $.browser.msie != true ) {
		$('#logo, ul.footerSoc li a').hover(function() {
			$(this).animate({opacity: 0.75}, 600);
		}, function() {
			$(this).animate({opacity: 1}, 600);
		});
		
		$('#campaignSlides .slides_container .slide a').hover(function() {
			$(this).siblings('img').animate({opacity: 0.75}, 600);
		}, function() {
			$(this).siblings('img').animate({opacity: 1}, 600);
		});
	}
});

// Login Form
$(document).ready(function($) {
	$("#topNav a.login").click(function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').addClass('inactive');
			$("#loginForm").fadeOut().removeClass('active');
		} else {
			$(this).addClass('active').removeClass('inactive');
			$("#loginForm").fadeIn().addClass('active');
		}
	});
});

/* ADD SPECIAL CLASSES */
$(document).ready(function($) {
	$('#footer .grid_3 .photos:last').addClass('nopadding nobckg');
});

/* SlideJS */
$(document).ready(function($) {
	$("#home #slider").slides({
		effect: 'fade',
		generateNextPrev: false,
		generatePagination: true,
		paginationClass: 'slider_pagination',
		fadeSpeed: 800,
		play: 5000
	});
	$("#gallery #slider").slides({
		effect: 'slide',
		generateNextPrev: false,
		generatePagination: true,
		paginationClass: 'slider_pagination',
		slideSpeed: 800,
		slideEasing: "easeOutBounce",
		play: 5000
	});
	$("#sidebarGallery").slides({
		effect: 'slide',
		generateNextPrev: true,
		generatePagination: false,
		slideSpeed: 800,
		play: 5000
	});
	$("#campaignSlides").slides({
		effect: 'fade',
		generateNextPrev: true,
		generatePagination: false,
		fadeSpeed: 250,
		play: 5000
	});
});

/* SMOOTH SCROLLING */
jQuery(document).ready(function($) {
    $('.scroll').bind('click',function(event){
        var $anchor = $(this); 
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        event.preventDefault();
    });
});

/* PRETTY PHOTO, DOUBLE FRAMED THUMBNAILS, GALLERY PAGE */
$(document).ready(function() {
	$('a[href$=jpg], a[href$=png], a[href$=gif], a[href$=jpeg], .singleItem .thumb a').each(function()
	{
		if(!$(this).attr('rel') != undefined && !$(this).attr('rel') != '')
		{
			$(this).attr('rel', 'prettyPhoto');
			
		}
		$(this).append('<span class="magnifier"></span>');
	});
	
	$('a[href$=".mov"] , a[href$=".swf"] , a[href*="vimeo.com"] , a[href*="youtube.com"]').each(function()
	{
		if(!$(this).attr('rel') != undefined && !$(this).attr('rel') != '')
		{
			$(this).attr('rel', 'prettyPhoto');
		}
		$(this).append('<span class="play"></span>');
	});
	
	$('#gallery .thumbHolder .thumb a').each(function() {
		if ($(this).attr('rel') == 'prettyPhoto') {
			$(this).attr('rel', 'prettyPhoto[gallery]');
		}
	});
	
	$('#sidebarGallery a').each(function() {
		if ($(this).attr('rel') == 'prettyPhoto') {
			$(this).attr('rel', 'prettyPhoto[sidebarGallery]');
		}
	});
	
	$('#gallery #slider a').each(function() {
		if ($(this).attr('rel') == 'prettyPhoto') {
			$(this).attr('rel', 'prettyPhoto[slider]');
		}
	});
	
	$(".doubleFramed a, #shopWidget > a").append('<span class="magnifier"></span>');
	
	$("a[rel^='prettyPhoto'], .doubleFramed a, #shopWidget > a").hover(function() {
		$(this).children('img').animate({opacity: 0.5}, 400);
	}, function() {
		$(this).children('img').animate({opacity: 1}, 400);
	});
	
	$("#sidebarGallery a").hover(function() {
		$(this).children('img').animate({opacity: 0.5}, 400);	
		var captionHeight = (-1) * $(this).children('span.imageCaption').outerHeight();	
		$(this).children('span.imageCaption').animate({bottom: captionHeight}, 400);
	}, function() {
		$(this).children('img').animate({opacity: 1}, 400);
		
		$(this).children('span.imageCaption').animate({bottom: 0}, 400);
	});
	
	$("a[rel^='prettyPhoto']").prettyPhoto({
			animation_speed: 'normal',
			slideshow: 4000,
			autoplay_slideshow: false,
			theme: 'facebook'
	});
	
	$('#videos .wide, #home .video').each(function() {
		$(this).children('div:first').addClass('player');
	});
	
	$('#slider .slide').each(function () {
		$(this).append('<span class="magnifier"></span>');
	});
	
	$('#home #slider .slide a').hover(function() {
		$(this).siblings('img').animate({opacity: 0.5}, 400);
	}, function() {
		$(this).siblings('img').animate({opacity: 1}, 400);
	});
});

/* jQuery COUNTDOWN */
$(document).ready(function($) {
	var finalDate = new Date(2012, 11 - 1, 6, 0, 0, 0);
	$('#campaignCountdown').countdown({until: finalDate, layout: '{dn} {dl} : {hn} {hl} : {mn} {ml} : {sn} {sl}'});
});

/* DROPDOWN */
function dropdownMenu()
{
	$("ul.navigation ul ").css({display: "none"});
	$("ul.navigation li").each(function()
	{			
		var $dropdownMenu = $(this).find('ul:first');
		
		$(this).hover(function()
		{	
			$dropdownMenu.stop().css({overflow:"hidden", height:"auto", display:"none"}).slideDown(400, function()
			{
				$(this).css({overflow:"visible", height:"auto"});
			});	
		},
		function()
		{	
			$dropdownMenu.stop().slideUp(400, function()
			{	
				$(this).css({overflow:"hidden", display:"none"});
			});
		});	
	});
}


/* CONTACT FORMS */
/* validate email */
function isValidEmail(email){
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(email);
}

jQuery(document).ready(function() {
	/* Subscribe Form */
	$('form#newsletterForm').submit(function() {
	
		var sendingError = false;

		var tbSenderEmail = $("form#newsletterForm input#email").val();
		
		if (jQuery.trim(tbSenderEmail) == "" || jQuery.trim(tbSenderEmail) == "Type in Your Email Address..." || !isValidEmail(tbSenderEmail)) {
			$(this).parent().addClass('sendingError');
			$(this).children('span').fadeIn(1500).fadeOut(1500);
			$(this).children('#email').focus();
			sendingError = true;
		}
		else {
			$(this).parent('div.formHolder').removeClass('sendingError').fadeOut(900);
			$(this).parent().siblings('div').delay(900).fadeIn(900);
		}
		
		return false;
	});

	// Contact Form
	$('form#contactForm').submit(function() {
	
		var sendingError = false;

		var tbSenderEmail = $("form#contactForm input#email").val();
		var tbMessage = $("form#contactForm textarea#message").val();
		
		if (jQuery.trim(tbSenderEmail) == "" || jQuery.trim(tbSenderEmail) == "Your Email Address..." || !isValidEmail(tbSenderEmail)) {
			$(this).children('p').children('#email').siblings().fadeIn(1500).fadeOut(1500);
			$(this).children('p').children('#email').focus();
			sendingError = true;
		}
		
		if (jQuery.trim(tbMessage) == "" || jQuery.trim(tbMessage) == "Your Message...") {
			$(this).children('p').children('#message').siblings().fadeIn(1500).fadeOut(1500);
			sendingError = true;			
		}
		
		
		if (!sendingError) {
			$('#contactForm .buttons input').fadeOut('normal', function(){
				$('form#contactForm .ajaxLoader').fadeIn('fast');			
			});
			
			$.post($("#contactForm").attr('action'), $("#contactForm").serialize(), function(data){
				$('#contactFormResult').html(data);
				$('form#contactForm .ajaxLoader').remove();
				$('#contactForm').fadeOut('slow');
				$('#contactForm').next('div').fadeOut('slow');
			});
			
			
		}
		
		return false;
	});
});
