jQuery(document).ready(function() {
	jQuery(".item-list li").mouseenter(function(){  
        $(this).find($('.item-list .hover')).stop(true, true).fadeIn(600);
        return false;
     });
      jQuery('.item-list li').mouseleave(function(){  
        jQuery(this).find($('.item-list .hover')).stop(true, true).fadeOut(400);
        return false;
     });
      jQuery(document).on('click', ".menu_trigger", function (e) {
        e.preventDefault()
        window.setTimeout(function() {
            if(jQuery('#nav').hasClass('clicked')){
                jQuery('#nav').stop(true,true).animate({height:'hide'},100);
                jQuery('#nav').removeClass('clicked');
            }else{
                jQuery('#nav').stop(true,true).animate({height:'show'},400);
                jQuery('#nav').addClass('clicked');
            }
        }, 400);
        return false;
    });
    jQuery("#nav").on('click', '.drops', function () {
        if (jQuery(this).hasClass("active")) {
            jQuery(this).removeClass("active").parent().next().slideUp();
        } else {
            jQuery(this).addClass("active").parent().next().slideDown();
        }
        return false;
    });
// begin add	
	var $container = jQuery('#container');
	// init
	$container.isotope({
		// options
		itemSelector: '.item',
		layoutMode: 'cellsByRow',
		cellsByRow: {
			columnWidth: 295,
			rowHeight: 295
		}
		});
		
	jQuery('#filters').on( 'click', 'li', function() {
		var filterValue = jQuery(this).attr('data-filter');
		$container.isotope({ filter: filterValue });
		jQuery( "#filters li" ).removeClass("active");
		jQuery(this).addClass("active");
	});
	jQuery('.fancybox').fancybox({
	  helpers: {
	    overlay: {
	      locked: false
	    }
	  }
	});
// end add	
}); 
jQuery(window).resize(function() {
    if(jQuery(document).width() > 768){
      jQuery( "#nav" ).addClass("active");
      jQuery( "#nav ul" ).attr('style','');
      jQuery( "#nav" ).attr('style','');
      jQuery( "#nav" ).removeClass("clicked");
      jQuery( "#nav .active" ).removeClass('active');
    }
    else {
        jQuery( "#nav" ).removeClass("active");
    }
});