// JavaScript Document
$(document).ready(function() {

	// Appends a link onto the end of each
	// wave's unordered list description
	//var message = $("<a href='http://www.surfline.com'>Check current conditions</a>");
	//$("button", ".wavesContainer").before(message);

	// Random wave of the day
	// This randomly selects between the different
	// div containers with a .waves class
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


	// Identifies the day of the week
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

	// Changes main poster image every day
	// Using above today variable and changing the string of the
	// image url to get us to each day's featured poster image
	$(".poster").css("background-image", "url(img/poster_" + today + ".jpg)");
	$(".poster").addClass("mainImg");

	// Steamer Lane Weather conditions
		var waves = $(this);
		var api = "c9cda4e16df76d61eb092e6b5c5910ee3f0c6f3c";
		var staCzUrl = "http://api.worldweatheronline.com/free/v1/weather.ashx?q=95062&format=json&date=today&key=" + api;
		$.ajax({
			type: 'POST',
			url: staCzUrl,
			dataType: 'jsonp',
			data: waves.serialize(),
			success: function(data){

				// local time
				console.log(data.data.current_condition[0].observation_time);
				var gmt = data.data.current_condition[0].observation_time;
				$('#steamers .gmt').text('Observation Time: ' + gmt + ' GMT');

				//temperature
				console.log(data.data.current_condition[0].temp_F);
				var temp = data.data.current_condition[0].temp_F;
				$('#steamers .temp').text('Air Temp: ' + temp + ' degrees.');

				//wind direction
				console.log(data.data.current_condition[0].winddirDegree);
				var w_dir = data.data.current_condition[0].winddirDegree;

				if (w_dir < 0) {
				var windDir = "North";
					} else if (w_dir < 45) {
				var windDir = "North East";
						} else if (w_dir < 90) {
				var windDir = "East";
						} else if (w_dir < 135) {
				var windDir = "South East";
							} else if (w_dir < 180) {
				var windDir = "South";
								} else if (w_dir < 225) {
				var windDir = "South West";
									} else if (w_dir < 270) {
				var windDir = "West";
										} else if (w_dir < 315) {
				var windDir = "North West";
											}
				console.log(windDir);

				// wind speed
				console.log(data.data.current_condition[0].windspeedMiles);
				var w_speed = data.data.current_condition[0].windspeedMiles;
				$('#steamers .windDir').text('Wind: From the ' + windDir + ' at ' + w_speed + ' mph');

				// weather Description
				console.log(data.data.current_condition[0].weatherDesc[0].value);
				var w_desc = data.data.current_condition[0].weatherDesc[0].value;
				$('#steamers .weatherDesc').text('Skies: ' + w_desc);

				},
			error: function(e) {console.log('epic fail')}
			});

		// Marine Conditions

		//var api = "c9cda4e16df76d61eb092e6b5c5910ee3f0c6f3c";
		//var carpUrl = "http://api.worldweatheronline.com/free/v1/weather.ashx?q=93014&format=json&date=today&key=" + api;

		// Trestles Weather Conditions
		//var api = "c9cda4e16df76d61eb092e6b5c5910ee3f0c6f3c";
		//var trestlesUrl = "http://api.worldweatheronline.com/free/v1/weather.ashx?q=92674&format=json&date=today&key=" + api;


});
