// JavaScript Document
$(document).ready(function() {
	
	// Appends a link onto the end of each 
	// wave's unordered list description
	var message = $("<a href='http://www.surfline.com'>Check current conditions</a>");
	$("button", ".wavesContainer").before(message);
	
	//Random wave of the day
	//This randomly selects between the different 
	//div containers with a .waves class	
	$("#predict").on("click", ".bestbet" , function() {
		var waves = $(".wavesContainer");
		var items = waves.find(".waves");
		var number = items.length;
		var random = Math.floor(Math.random() * number);
		$(items).removeClass("highlight");
		$(items).eq(random).addClass("highlight");
		});
		
	// Premise Toggle
	// Displays toggled article 
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
				
				
	//Identifies the day of the week
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
	
	//Changes main poster image every day
	//Using above today variable and changing the string of the 
	//image url to get us to each day's featured poster image
	$(".poster").css("background-image", "url(img/poster_" + today + ".jpg)");
	$(".poster").addClass("mainImg");

});