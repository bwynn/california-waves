var api = "c9cda4e16df76d61eb092e6b5c5910ee3f0c6f3c";
var waves = $(this);

function santaCruzMarineCall() {
  $.ajax({
    type: 'POST',
    url: "http://api.worldweatheronline.com/free/v1/marine.ashx?q=36.5%2C-122&format=json&date=today&key=" + api,
    dataType: 'jsonp',
    data: waves.serialize(),
    success: function(data){
      var swellDir = data.data.weather[0].hourly[0].swellDir;         // gets swell direction
      var waterTemp = data.data.weather[0].hourly[0].waterTemp_F;     // gets water temp
      var wSizeM = data.data.weather[0].hourly[0].swellHeight_m;      // gets swell height in meters
      var wSizeF = (wSizeM * 3.28).toPrecision(3);                    // meters to feet
      var sPeriod = data.data.weather[0].hourly[0].swellPeriod_secs;

      console.log('water temp today: ' + waterTemp);
      console.log(swellDir);
      console.log('wave height feet: ' + wSizeF);
      console.log('swell period: ' + sPeriod + ' seconds');

      swDir();                                                        // calls swDir function
      wetsuit();                                                      // calls wetsuit function
      swellPeriod();                                                  // calls swell period
    }
  });
};

function swDir() {
  var swellDir = data.data.weather[0].hourly[0].swellDir;
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
    var swellSig = "Windswell";
  } else if ( sPeriod < 12 ) {
    var swellSig = "Short period ground swell";
  } else if ( sPeriod > 12 ) {
    var swellSig = "Long period ground swell";
  }
  console.log("Today's swell conditions: " + swellSig);
};

santaCruzMarineCall();
