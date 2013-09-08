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
		$('.show-footer').fadeIn(1000);
    	} else {
        $('.show-footer').fadeOut(100);
	}
});
// Back to TOP
$(function() {
	$("a#top").click(function() {
	$("html,body").animate({"scrollTop" : 0},1000);
	return false;	
	});
});


