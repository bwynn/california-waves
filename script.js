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


	// Weather conditions
		var waves = $(this);
		var api = "c9cda4e16df76d61eb092e6b5c5910ee3f0c6f3c";
		//array carrying the url for each location.
		var zips = ["95062", "93014","92674"]
		var location_call = "http://api.worldweatheronline.com/free/v1/weather.ashx?q=" + zips[2] + "&format=json&date=today&key=" + api;
		$.ajax({
			type: 'POST',
			url: location_call,
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

			var staCzUrl = "http://api.worldweatheronline.com/free/v1/marine.ashx?q=36.5%2C-122&format=json&date=today&key=" + api;
			$.ajax({
				type: 'POST',
				url: staCzUrl,
				dataType: 'jsonp',
				data: waves.serialize(),
				success: function(data){
					// Water Temp
					console.log('water temp today: ' + data.data.weather[0].hourly[0].waterTemp_F);
					var waterTemp = data.data.weather[0].hourly[0].waterTemp_F;

					// Wave Size
					console.log('wave height meters: ' + data.data.weather[0].hourly[0].swellHeight_m);
					var wSizeM = data.data.weather[0].hourly[0].swellHeight_m;
					var wSizeF = wSizeM * 3.28;
					console.log('wave height ' + wSizeF + ' feet')
					if ( wSizeF < 1 ) {
						var wSize = "Flat";
					} else if ( wSizeF < 3 ) {
						var wSize = "Knee to waist high";
					} else if ( wSizeF < 4 ) {
						var wSize = "Waist to chest high";
					} else if ( wSizeF < 5 ) {
						var wSize = "Chest to head high";
					} else if ( wSizeF < 6 ) {
						var wSize = "Head high";
					} else if ( wSizeF < 8 ) {
						var wSize = "Overhead";
					} else if ( wSizeF < 12 ) {
						var wSize = "Overhead to double overhead";
					} else if ( wSizeF < 18 ) {
						var wSize = "Double to triple overhead";
					} else if (wSizeF > 18.1 ) {
						var wSize = "Triple overhead plus";
					}
					console.log('Wave Size Today: ' + wSize);


					// Wetsuit Recommendation
					if ( waterTemp < 55 ) {
						var wSuit = "5/4 Hooded Fullsuit";
					} else if ( waterTemp < 60 ) {
						var wSuit = "4/3 Fullsuit";
					} else if ( waterTemp < 67 ) {
						var wSuit = "3/2 Fullsuit";
					} else if ( waterTemp < 72 ) {
						var wSuit = "Springsuit";
					} else if ( waterTemp < 75 ) {
						var wSuit = "Vest & Trunks";
					} else if ( waterTemp > 75 ) {
						var wSuit = "Trunks";
					}
					console.log(wSuit);

					// Swell Period
					console.log('swell period: ' + data.data.weather[0].hourly[0].swellPeriod_secs + ' seconds');
					var sPeriod = data.data.weather[0].hourly[0].swellPeriod_secs;
					if ( sPeriod < 7 ) {
						var swellSig = "Junky, short-period windswell";
					} else if ( sPeriod < 10 ) {
						var swellSig = "Windswell";
					} else if ( sPeriod < 12 ) {
						var swellSig = "Short period ground swell";
					} else if ( sPeriod > 12 ) {
						var swellSig = "Long period ground swell";
					}
					console.log("Today's swell conditions: " + swellSig);

					// Swell Direction
					var swellDir = data.data.weather[0].hourly[0].swellDir;
					if ( swellDir < 23 ) {
						var sDir = "NNE";
					} else if ( swellDir < 45 ) {
						var sDir = "NE";
					} else if ( swellDir < 69 ) {
						var sDir = "ENE";
					} else if ( swellDir < 90 ) {
						var sDir = "E";
					} else if ( swellDir < 116 ) {
						var sDir = "ESE";
					} else if ( swellDir < 140 ) {
						var sDir = "SE";
					} else if ( swellDir < 170 ) {
						var sDir = "SSE";
					} else if ( swellDir < 190 ) {
						var sDir = "S";
					} else if ( swellDir < 215 ) {
						var sDir = "SSW";
					} else if ( swellDir < 235 ) {
						var sDir = "SW";
					} else if ( swellDir < 255 ) {
						var sDir = "WSW";
					} else if ( swellDir < 280 ) {
						var sDir = "W";
					} else if ( swellDir < 305 ) {
						var sDir = "WNW";
					} else if ( swellDir < 320 ) {
						var sDir = "NW";
					} else if ( swellDir < 340 ) {
						var sDir = "NNW";
					} else if ( swellDir > 341 ) {
						var sDir = "N"
					}
					console.log('Primary swell direction: ' + sDir + ' at ' + swellDir + ' degrees.')

					$('#steamers .wSize').text('Wave size: ' + wSize);
					$('#steamers .sConditions').text('Swell characteristics: ' + swellSig);
					$('#steamers .sDirection').text('Swell direction: ' + sDir + ', at ' + swellDir + ' degrees.');
					$('#steamers .wTemp').text('Water temp: ' + waterTemp + ' degrees');
					$('#steamers .wetsuit').text('Recommended suit: ' + wSuit);
				},
				error: function(e) {console.log('marine epic fail')}
			});



		// Marine Conditions

		//var api = "c9cda4e16df76d61eb092e6b5c5910ee3f0c6f3c";
		//var carpUrl = "http://api.worldweatheronline.com/free/v1/weather.ashx?q=93014&format=json&date=today&key=" + api;

		// Trestles Weather Conditions
		//var api = "c9cda4e16df76d61eb092e6b5c5910ee3f0c6f3c";
		//var trestlesUrl = "http://api.worldweatheronline.com/free/v1/weather.ashx?q=92674&format=json&date=today&key=" + api;


});
