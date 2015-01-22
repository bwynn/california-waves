var api = "c9cda4e16df76d61eb092e6b5c5910ee3f0c6f3c";                 // api call
var waves = $(this);                                                  // sets $(this) value globally for wave

function santaCruzMarineCall() {                                      // declare santaCruzMarineCall function
        $.ajax({                                                      // jQuery ajax declaration
    type: 'POST',                                                     // declare type of ajax call
    url: "http://api.worldweatheronline.com/free/v1/marine.ashx?q=36.5%2C-122&format=json&date=today&key=" + api,
    dataType: 'jsonp',                                                // declare dataType, using parsed json
    data: waves.serialize(),                                          // setting $(this).serialize() using waves variable
    success: function(data){                                          // successful api call performs function
      receive(data);                                                  // calls receive function
      swDir();                                                        // calls swDir function
      wetsuit();                                                      // calls wetsuit function
      swellPeriod();                                                  // calls swell period
    }
  });
};

function receive(data) {                                          // declare receive function taking data as the argument
  var swellDir = data.data.weather[0].hourly[0].swellDir;         // gets swell direction
  var waterTemp = data.data.weather[0].hourly[0].waterTemp_F;     // gets water temp
  var wSizeM = data.data.weather[0].hourly[0].swellHeight_m;      // gets swell height in meters
  var wSizeF = (wSizeM * 3.28).toPrecision(3);                    // meters to feet
  var sPeriod = data.data.weather[0].hourly[0].swellPeriod_secs;  // Swell period
  console.log('water temp today: ' + waterTemp);                  // prints water temp string
  console.log(swellDir);                                          // prints swell direction
  console.log('wave height feet: ' + wSizeF);                     // prints wave size converted to feet
  console.log('swell period: ' + sPeriod + ' seconds');           // prints swell period
}
// Sam's Notes
/*function tennessee() {
  'use strict';

  $(document).ready(init);

  function init() {
    $('#get-weather').click(getWeather);
  }

  function getWeather() {
    var url = 'http://api.wonderground.com/api/dd0113b11366fc5b/conditions/TN/Nashville.json?callback=?';
    $.getJson(url, receive);
  }

  function receive(data) {
    var temp = data.current_observation.temperature_string;
    console.log(temp);
  }
};*/


function swDir() {
  var swellDir;
  var sDir;
  if ( swellDir < 23 ) {
     sDir = "NNE";
  } else if ( swellDir < 45 ) {
     sDir = "NE";
  } else if ( swellDir < 69 ) {
     sDir = "ENE";
  } else if ( swellDir < 90 ) {
     sDir = "E";
  } else if ( swellDir < 116 ) {
     sDir = "ESE";
  } else if ( swellDir < 140 ) {
     sDir = "SE";
  } else if ( swellDir < 170 ) {
     sDir = "SSE";
  } else if ( swellDir < 190 ) {
     sDir = "S";
  } else if ( swellDir < 215 ) {
     sDir = "SSW";
  } else if ( swellDir < 235 ) {
     sDir = "SW";
  } else if ( swellDir < 255 ) {
     sDir = "WSW";
  } else if ( swellDir < 280 ) {
     sDir = "W";
  } else if ( swellDir < 305 ) {
     sDir = "WNW";
  } else if ( swellDir < 320 ) {
     sDir = "NW";
  } else if ( swellDir < 340 ) {
     sDir = "NNW";
  } else if ( swellDir > 341 ) {
     sDir = "N"
  }
  console.log('Primary swell direction: ' + sDir + ' at ' + swellDir + ' degrees.')
};

// Wetsuit Recommendation
function wetsuit() {
  var waterTemp;
  if ( waterTemp < 55 ) {
    var wSuit = "5/4 Hooded Fullsuit";
  } else if ( waterTemp < 60 ) {
     wSuit = "4/3 Fullsuit";
  } else if ( waterTemp < 67 ) {
     wSuit = "3/2 Fullsuit";
  } else if ( waterTemp < 72 ) {
     wSuit = "Springsuit";
  } else if ( waterTemp < 75 ) {
     wSuit = "Vest & Trunks";
  } else if ( waterTemp > 75 ) {
     wSuit = "Trunks";
  }
  console.log('wetsuit: ' + wSuit);
};

// Swell Period
function swellPeriod() {
  var sPeriod;
  if ( sPeriod < 7 ) {
    var swellSig = "Junky, short-period windswell";
  } else if ( sPeriod < 10 ) {
     swellSig = "Windswell";
  } else if ( sPeriod < 12 ) {
     swellSig = "Short period ground swell";
  } else if ( sPeriod > 12 ) {
     swellSig = "Long period ground swell";
  }
  console.log("Today's swell conditions: " + swellSig);
};


santaCruzMarineCall();
