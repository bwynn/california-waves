var api = "c9cda4e16df76d61eb092e6b5c5910ee3f0c6f3c";
var waves = $(this);

$.ajax({
  type: 'POST',
  url: "http://api.worldweatheronline.com/free/v1/marine.ashx?q=36.5%2C-122&format=json&date=today&key=" + api,
  dataType: 'jsonp',
  data: waves.serialize(),
  success: function(data){
    var swellDir = data.data.weather[0].hourly[0].swellDir;         // gets swell direction
    console.log(swellDir);                                          // prints to console
    swDir();                                                        // calls swDir function
  }
});

function swDir(data) {
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
