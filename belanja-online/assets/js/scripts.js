$(document).ready(function() {
	$("#owl-slider").owlCarousel({
		autoPlay: 5000, //Set AutoPlay to 3 seconds
		navigation : false, // Show next and prev buttons
		slideSpeed : 600,
		paginationSpeed : 1200,
		singleItem:true
	});
	
	$("#owl-product, #owl-product-featured").owlCarousel({
		items : 6,
		itemsDesktop : [1199,6],
		itemsDesktopSmall : [980,4],
		itemsTablet: [768,3],
		itemsTabletSmall: false,
		itemsMobile : [479,2],
		autoHeight : false,
		slideSpeed : 600,
		paginationSpeed : 1200,
		rewindSpeed : 1400,
		pagination : true,
		singleItem : false,
		itemsScaleUp : false,
		navigation : true
	});
	
	$("#owl-brands").owlCarousel({
		items : 7,
		itemsDesktop : [1199,7],
		itemsDesktopSmall : [980,5],
		itemsTablet: [768,4],
		itemsTabletSmall: false,
		itemsMobile : [479,2],
		autoHeight : false,
		slideSpeed : 600,
		paginationSpeed : 1200,
		rewindSpeed : 1400,
		pagination : true,
		singleItem : false,
		itemsScaleUp : false,
		navigation : true
	});
	
});

$(document).ready(function() {
	$( "#footer" ).addClass( "wow animate bounceInDown" );
});
wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
)
wow.init();


/***************** Scroll to top *****************/
$(function() {
	'use strict';
    var upBtn = $(".up-btn");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            upBtn.addClass("showBtn");
        } else {
            upBtn.removeClass("showBtn");
        }
    });
});
/***************** Scroll Smoot to top *****************/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
/***************** Range Price *****************/

/***************** Zoom Product *****************/
$(document).ready(function () {
	$("#zoom_03").elevateZoom({
		gallery:'gallery-image', cursor: 'pointer', galleryActiveClass: "active", imageCrossfade: true, loadingIcon: "assets/img/ajax-loader.gif",
		zoomType : "inner",
		debug : true,
		cursor: "crosshair",
		zoomWindowFadeIn: 500,
		zoomWindowFadeOut: 500
	}); 

	$("#zoom_03").bind("click", function(e) {  
		var ez =   $('#zoom_03').data('elevateZoom');
		ez.closeAll(); //NEW: This function force hides the lens, tint and window	
		$.fancybox(ez.getGalleryList());
		return false;
	});
});


/***************** Waypoints *****************

$(document).ready(function() {
'use strict';
	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

});

/***************** Slide-In Nav *****************

$(window).load(function() {
'use strict';
	$('.nav_slide_button').click(function(event) {
		
		//event.preventDefault();
		$('body').toggleClass( "move-left" );
		$('.pull').toggleClass( "revealmenu" );	
		event.preventDefault(event);
	});

});

/***************** Smooth Scrolling *****************

$(function() {
'use strict';
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});

});

/***************** Nav Transformicon ****************

document.querySelector("#nav-toggle").addEventListener("click", function() {
	'use strict';
	this.classList.toggle("active");
});

/***************** Owl Carousel ****************

$(document).ready(function() {
	'use strict'; 
	$("#portfolioSlider").owlCarousel({
		items : 3,
		navigation : false,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,1],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		autoHeight : true,
		slideSpeed : 600,
		paginationSpeed : 1200,
		rewindSpeed : 1400,
		pagination : true,
	});

	$("#servicesSlider").owlCarousel({
		items : 1,
		navigation : false,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		autoHeight : true,
		slideSpeed : 600,
		paginationSpeed : 1200,
		rewindSpeed : 1400,
		pagination : true,
	});

});
/***************** Nicescroll *****************

$(document).ready(
	
);


*/
