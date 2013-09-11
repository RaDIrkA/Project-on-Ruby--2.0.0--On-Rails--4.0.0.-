// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
/*
//=require foundation/foundation
//=require foundation/foundation.alerts
//=require foundation/foundation.clearing
//=require foundation/foundation.cookie
//=require foundation/foundation.dropdown
//=require foundation/foundation.forms
//=require foundation/foundation.joyride
//=require foundation/foundation.magellan
//=require foundation/foundation.orbit
//=require foundation/foundation.reveal
//=require foundation/foundation.section
//=require foundation/foundation.tooltips
//=require foundation/foundation.topbar
//=require foundation/foundation.interchange
//=require foundation/foundation.placeholder
//=require foundation/foundation.abide
*/
//= require turbolinks
//= require_tree .

$(function(){ $(document).foundation(); });
// Show login for admin
$(document).ready(function() {
	$(".klikni").click (function() {
	$("#login").slideToggle("slow");
	});
	$("#login").mouseleave(function(){
		$("#login").slideUp("600");
	})
});
// Show Footer
$(window).scroll(function() {
		if(document.body.scrollHeight - $(this).scrollTop() <=$(this).height()) 
		{
		$('.show-footer').fadeIn(700);
    	} else {
        $('.show-footer').fadeOut(300);
	}
});

// footer icons and logo	

	$(window).scroll( function() {
        if ( $(window).scrollTop() + $(window).height() >= $(document).height() ) {
           showLogo(); }
        else {hideLogo(); }   
	});
	function showLogo() {
		$(".footer-logo").animate({"left":"-50px"},1000); 		
  };
  	function hideLogo() {
		$(".footer-logo").fadeIn(1000); 		
  };


// Back to TOP
//$(window).scroll(function() {
//	if ($(this).scrollTop()) {
//		$(".back-to-up").fadeIn(600);
//	}else {
//		$(".back-to-up").fadeOut(700);	
//	}
//});

$(function() {
	$("a#top").click(function() {
	$("html,body").animate({"scrollTop" : 0},1000);
  return false;	
  });
});

$(window).scroll(function() {
	if(document.body.scrollHeight - $(this).scrollTop() <=$(this).height()) 
	{	$(".back-to-up").fadeIn(1500);
	}else {
		$(".back-to-up").fadeOut(700);}
});		

//   $(window).scroll(checkscroll);  


  //    function checkscroll(){
    //      var top = $(window).scrollTop();
      //    if(top > 200){
        //    $('#plane').fadeIn('slow');
    //      }else{
      //      $('#plane').fadeOut('slow');
     //     }
   //   }

 //  checkscroll();

//You also need to check the scrollTop value on load of the page. Try this:

//function checkScrollPosition() {
//    $(window).scrollTop() > 600 ? $('#plane').fadeOut('slow') : $('#plane').fadeIn('slow');
//});

//$(window).scroll(checkScrollPosition); // check on scroll
//checkScrollPosition(); // check on load



$(document).ready(function(){
 $.ajaxSetup( {cache:false} );

/* Load DIV When Page Loads */
	$(window).load( function () {
		$('.div1').fadeIn('slow', function() {
			$(this).fadeTo("slow", 1);
		});
	});



	/* Load DIV After Scrollbar Is Moved 100px */
	$(window).scroll( function() {
        if ( $(window).scrollTop() > 100 ) {
           loadDiv2(); /* calls loadDiv2 Function below */
        }
	});

	function loadDiv2() {
		$('.div2').fadeIn('slow', function() {
			$(this).fadeTo("slow", 1);
		});
	}



 	$(window).scroll( function() {
 		if ( $(window).scrollTop() > 50 ) {
 			HideMenu();
 		}
 	});	
 	
 		function HideMenu() {
 			$("#hideMenu").fadeOut("slow", function() {
 			//	$(this).fadeTo("slow", 1);
 			});
 		}


 	$(window).scroll( function() {
 		if ( $(window).scrollTop() < 50 ) {
 			ShowMenu();
 		}
 	});	
 	
 		function ShowMenu() {
 			$("#hideMenu").fadeIn("slow", function() {
 			//	$(this).fadeTo("slow", 1);
 			});
 		}



	
 			



	}); /* Do Not Remove */
 		

// on scrool litel down menu slide down from nowhere :)
//var startY = $("#hideMenu").position().top +
//	$("#hideMenu").outerHeight();
//
//	$(window).scroll(function(){
//		if( $(this).scrollTop() > startY ) {
//			$(".glavni-menu").slideDown();
//		}else{
//			$(".glavni-menu").slideUp();
//		}
//	});	

function ostani_navrhi() {
	var window_top = $(window).scrollTop();
	var div_top = $("#glavni-menu-sticky").offset().top;
	if (window_top > div_top) {
		$(".glavni-menu").addClass("stick");
	}else {
		$(".glavni-menu").removeClass("stick");
	}
}
$(function() {
	$(window).scroll(ostani_navrhi);
	ostani_navrhi();
});
