
jQuery(document).on("scroll",function(){
	'use strict';
	
	if( jQuery(document).scrollTop() > 100 ) {
		jQuery("body").removeClass("header-large").addClass("header-small");
	}
	else {
		jQuery("body").removeClass("header-small").addClass("header-large");
	}
});

jQuery(document).ready(function($){
	'use strict';
	
	/* Keyboard image navigation */
	if ( $('body').hasClass('attachment-jpg') || 
		$('body').hasClass('attachment-jpeg') || 
		$('body').hasClass('attachment-jpe') || 
		$('body').hasClass('attachment-gif') || 
		$('body').hasClass('attachment-png') 
	) {
		$( document ).keydown( function( e ) {
			var url = false;
			if ( e.which === 37 ) {  // Left arrow key code
				url = $( '.image-navigation .nav-previous a' ).attr( 'href' );
			}
			else if ( e.which === 39 ) {  // Right arrow key code
				url = $( '.image-navigation .nav-next a' ).attr( 'href' );
			}
			if ( url && ( !$( 'textarea, input' ).is( ':focus' ) ) ) {
				window.location = url;
			}
		} );
	}
	
	/* Style Comments */
	$('#commentsubmit').addClass('btn btn-primary');

	/* Style WordPress Default Widgets */
	$('.widget select').addClass('form-control');
	$('.widget table#wp-calendar').addClass( 'table table-striped table-bordered').unwrap().find('th, td').addClass('text-center');
	$('.widget-title .rsswidget img').hide();
	$('.widget-title .rsswidget:first-child').append('<i class="fa fa-rss pull-right">');
	$('.widget ul, .widget li').addClass('mm-nolist');

	/* Mobile Menu */
	var $siteMenu = '', 
		$sidebarContent = '';
	if ($('.site-menu').length) { $siteMenu = '<ul>' + $('.site-menu').html() + '</ul>'; }
	if ($('.sidebar-padder').length) { $sidebarContent = '' + $('.sidebar-padder').html() + ''; }
	var $mobileMenu = $('<nav id="mobile-menu"><div>'+$siteMenu+$sidebarContent+'</div></nav>');
	$($mobileMenu).mmenu({
		}, {
		classNames: {
			fixedElements: {
				fixedTop: "mmenu-fixed-top"
			}
		}
	});	
	$(".toggle-menu").click(function(){
		$("#mobile-menu").trigger("open");	
	});	

});



