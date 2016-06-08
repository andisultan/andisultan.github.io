jQuery(document).ready(function($) {
    
	/***************** Fixed Menu On Scroll to Top ******************/
    var nav = $('#header');    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 130) {
            nav.addClass("fixed");
        } else {
            nav.removeClass("fixed");
        }
    });
    
});
