// JavaScript Document
$(document).ready(function() {
	// Inserted content
	var message = $("<a href='http://www.surfline.com'>Check current conditions</a>");
	$("button", ".wavesContainer").before(message);
	
	//Random wave of the day	
	$("#predict").on("click", ".bestbet" , function() {
		var waves = $(".wavesContainer");
		var items = waves.find(".waves");
		var number = items.length;
		var random = Math.floor(Math.random() * number);
		$(items).removeClass("highlight");
		$(items).eq(random).addClass("highlight");
		});
		
	// Premise Toggle
	$("#premise").on("click", "button", function() {
		$(this).show();
		$(".details").slideToggle();
		});
		
	// Photo Toggle
	$("#steamers").on("click", "button", function(){
	$(this).show();
	$('.photos', '#steamers').slideToggle();
	});
	$("#rincon").on("click", "button", function(){
	$(this).show();
	$('.photos', '#rincon').slideToggle();
	});
	$("#trestles").on("click", "button", function(){
	$(this).show();
	$('.photos', '#trestles').slideToggle();
	});
	function showPhotos() {
	$(this).find("span").slideToggle("fast");	
		}
	$(".photos").on("mouseenter", "li", showPhotos)
                .on("mouseleave", "li", showPhotos);
				
	//Click function
	
	var d = new Date();
	var weekday = new Array(7);
	weekday[0] = "sunday";
	weekday[1] = "monday";
	weekday[2] = "tuesday";
	weekday[3] = "wednesday";
	weekday[4] = "thursday";
	weekday[5] = "friday";
	weekday[6] = "saturday";
	var today = weekday[d.getDay()];
	
	$(".poster").css("background-image", "url(img/poster_" + today + ".jpg)");
	$(".poster").addClass("mainImg");

});