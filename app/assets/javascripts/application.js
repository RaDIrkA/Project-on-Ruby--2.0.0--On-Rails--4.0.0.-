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
$(window).scroll(function() 
	{
		if(document.body.scrollHeight - $(this).scrollTop() <=$(this).height()) 
		{
		$('.show-footer').fadeIn(700);
    	} else {
        $('.show-footer').fadeOut(300);
	}
});
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

$(window).bind('scroll', function(){
if($(this).scrollTop() > 200) {
$("#plane").show();
}
});

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
 		if ( $(window).scrollTop() > 100 ) {
 			HideMenu();
 		}
 	});	
 	
 		function HideMenu() {
 			$("#hideMenu").fadeOut("slow", function() {
 			//	$(this).fadeTo("slow", 1);
 			});
 		}


 	$(window).scroll( function() {
 		if ( $(window).scrollTop() < 100 ) {
 			ShowMenu();
 		}
 	});	
 	
 		function ShowMenu() {
 			$("#hideMenu").fadeIn("slow", function() {
 			//	$(this).fadeTo("slow", 1);
 			});
 		}




	}); /* Do Not Remove */
