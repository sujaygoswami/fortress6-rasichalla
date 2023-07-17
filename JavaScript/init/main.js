jQuery(document).ready(function(){









function isAppleDevice(){
return (
(navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
(navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
(navigator.userAgent.toLowerCase().indexOf("ipod") > -1)
);
}
var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
var appStoreURL = "";
if(isAndroid > -1){
jQuery('body').addClass('android-device');
jQuery('html').addClass('android-device');
}
else if( isAppleDevice() ){
jQuery('body').addClass('ios-device');
jQuery('html').addClass('ios-device');

  // jQuery( window ).on( "orientationchange", function( event ) {
  //   location.reload();
  // });


}





//Check Mobile Devices
var checkMobile = function(){

    //Check Device
    var isTouch = ('ontouchstart' in document.documentElement);

    //Check Device //All Touch Devices
    if ( isTouch ) {

        jQuery('body').addClass('touch');

        

    }
    else {

        jQuery('body').addClass('no-touch');

    };

};

//Execute Check
checkMobile();

// class buttons
jQuery('.arrow-link').addClass('icon-link right-direction-arrow');

// powermail_form
jQuery('.powermail_form .powermail_label').addClass('form-label');
jQuery('.powermail_form .powermail_input').addClass('form-control');
jQuery('.powermail_form .powermail_fieldwrap').addClass('mb-3');
jQuery('.powermail_form .powermail_textarea').addClass('form-control');
jQuery('.powermail_form .powermail_submit').addClass('site-btn');


// vieport checker
$('.view-port-appear').viewportChecker({
  classToAdd:'fadeIn active',    
  });

//notation
var site = {}


// navigation
jQuery('.download-list li a').each(function(){
  jQuery(this).wrapInner('<span></span>');
  jQuery(this).append('<i></i>');
});
jQuery('.main-navugation .primary-menu').each(function(){
  var HASSUB = jQuery(this).find('.second-label').length;
  if (HASSUB > 0){
    jQuery(this).addClass('has-sub-mneu');
  }
});

jQuery('.main-navugation .has-sub-mneu').hover(function(){
  jQuery(this).find('.second-label').stop(true, true).fadeIn(1000);
  jQuery('.main-navugation .has-sub-mneu').not(this).find('.second-label').stop(true, true).fadeOut(200);
  var SUBMENUCONTAINERHEIGHT = jQuery(this).find('.second-label .container').height();
  jQuery(this).parents('.main-navugation').find('.sub-menu-height-holder').height(SUBMENUCONTAINERHEIGHT);
  jQuery(this).parents('.main-navugation').find('.sub-secondLabel-overlay').stop(true, true).slideDown();
});

jQuery('.main-navugation li.primary-menu:not(.has-sub-mneu)').hover(function(){
  jQuery('.main-navugation .second-label').stop(true, true).fadeOut(200);
  jQuery('.sub-secondLabel-overlay').stop(true, true).slideUp();
});

jQuery('.main-navugation ul.first-level').mouseleave(function(){
  jQuery('.main-navugation .second-label').stop(true, true).fadeOut(200);
  jQuery('.sub-secondLabel-overlay').stop(true, true).slideUp();
});


// iconic-hovered-widget
site.HOVEREDWIDGETMATCHHEIGHT = function() {
  jQuery('.iconic-hovered-widget .primary-content').matchHeight();
};
jQuery('.iconic-hovered-widget .widget-block').hover(function(){
  jQuery(this).addClass('hovered');
  jQuery(this).find('.main-context-wrap').show();
  site.HOVEREDWIDGETMATCHHEIGHT();
},
function(){
  jQuery(this).find('.main-context-wrap').hide();
  jQuery(this).removeClass('hovered');
}
);

// short sub menu
jQuery('.main-navugation .primary-menu').each(function(){
  var HASSHORTSUB = jQuery(this).find('.short-sub-menu').length;
  if (HASSHORTSUB > 0){
    jQuery(this).addClass('has-short-submenu');
  }
});
jQuery('.has-short-submenu').hover(function(){
  jQuery(this).find('.short-sub-menu').fadeIn(200);
},
function(){
  jQuery(this).find('.short-sub-menu').fadeOut(200);
}
);

// go top visual
site.GOTOPVISUAL = function() {
  if (jQuery(document).scrollTop() > 200) {
    jQuery('.go-top').addClass('d-inline-block');
    jQuery('.go-top').addClass('fadeInUp');
    jQuery('.go-top').removeClass('fadeOutDown');
  }
  else {
    jQuery('.go-top').addClass('fadeOutDown');
    jQuery('.go-top').removeClass('fadeInUp');
  }
};




// iconc widget carousel
var ICONICWIDGETCAROUSEL = jQuery('.iconic-widget-carousel-content .owl-carousel');
ICONICWIDGETCAROUSEL.owlCarousel({
  loop: false,
  margin: 0,
  nav: true,
  dots: false,
  items:1,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false
});
ICONICWIDGETCAROUSEL.on('changed.owl.carousel', function(event) {
  setTimeout(function() {

      jQuery('.iconic-widget-carousel-content .owl-item:nth-child(2)').each(function(){
        if (jQuery(this).hasClass('active')) {
          jQuery(this).parents('.owl-carousel').addClass('owl-stage-left-right-auto');
        }else{
          jQuery(this).parents('.owl-carousel').removeClass('owl-stage-left-right-auto');
        }
      });

      jQuery('.iconic-widget-carousel-content .owl-item:nth-child(3)').each(function(){
        if (jQuery(this).hasClass('active')) {
          jQuery(this).parents('.owl-carousel').addClass('owl-stage-left-auto');
        }else{
          jQuery(this).parents('.owl-carousel').removeClass('owl-stage-left-auto');
        }
      });

  }, 1);


});


















jQuery(window).resize(function(){


});



jQuery( window ).on( "orientationchange", function( event ) {

   
          
});









// set back

jQuery('.set-back').each(function(){

 var SETBACK = jQuery(this).find('img').attr('src');
  jQuery(this).css('background-image', 'url(' + SETBACK + ')');

});










jQuery('.touch .has-submenu > a').addClass('dual-click');
   
   jQuery(document).on( "click", ".dual-click", function(event) {
        
        jQuery(".dual-click").not(this).removeClass("clicked");
        jQuery(this).toggleClass("clicked");
        if (jQuery(this).hasClass("clicked")) {
            event.preventDefault();
        }
    });


// go top
jQuery(window).scroll(function() {
  site.GOTOPVISUAL();
});
site.GOTOPVISUAL();  

 jQuery('.go-top').click(function(){
   jQuery('html, body').animate({scrollTop: 0}, 400);
  
});

// responsive menu
jQuery('.responsive-menu-trigger').click(function(){
  jQuery('.the-mobile-menu').show();
  jQuery('.the-mobile-menu').addClass('fadeIn');
  jQuery('.the-mobile-menu').removeClass('fadeOut');
});
jQuery('.the-mobile-menu .menu-close-trigger').click(function(){
  jQuery('.the-mobile-menu').removeClass('fadeIn');
  jQuery('.the-mobile-menu').addClass('fadeOut');
});


// contact content powermail
jQuery('.contact-content').each(function(){
  var POWERMAILFIELDSETLAYOUT = jQuery(this).find('.powermail_fieldset.layout1');
  jQuery(this).find(POWERMAILFIELDSETLAYOUT).wrapAll('<div class="row extra-lg-grid"></div>');
  jQuery(this).find(POWERMAILFIELDSETLAYOUT).addClass('col-6 my-col');

  jQuery(this).find('.powermail_fieldwrap').each(function(){
    jQuery(this).find('.powermail_field').detach().prependTo(this);
    jQuery(this).removeClass('mb-3');
  });

  jQuery(this).find('.powermail_fieldwrap_type_radio .radio').each(function(){
    jQuery(this).find('input').wrap('<div class="custom-input"></div>');
    jQuery(this).find('.custom-input input').wrap('<div class="custom-input-visual"></div>');
    jQuery(this).find('.custom-input .custom-input-visual').append('<div class="clone-check"></div>');
  });


});



});








// load
jQuery(window).load(function(){




// match height
  jQuery('.equal-row').each(function() {
       jQuery(this).children('.equal-block').matchHeight();
  });

  jQuery('.element-row').each(function() {
       jQuery(this).children('.equal-block').matchHeight();
  });







var siteLoad = {}




siteLoad.CAPTIONSLIDERHEIGHT = function() {

  
    

};   




jQuery(window).resize(function(){


});


jQuery('.powermail_form').addClass('active');


});

