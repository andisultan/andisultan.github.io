jQuery( ".signup-btn" ).addClass( "wow animate bounce" );
jQuery( "section, p, ul, li, img" ).addClass( "wow animate fadeInUp" );
jQuery( ".section6 p" ).removeClass( "wow animate fadeInUp" );


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