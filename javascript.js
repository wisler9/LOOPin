



// // //console.log(navigator.geolocation.getCurrentPosition())

var originLocation = navigator.geolocation.getCurrentPosition(function(response) {
   var lati = response.coords.latitude;
  var longi = response.coords.longitude;
  console.log('hellow')
  console.log(lati, longi)

  return {lati, longi}
  
});




//inputInfo();

 //console.log($('#start-location').val(40.122, 100.144()));
 

// function inputInfo() {
//     origin = lati, longi
    

// }

// inputInfo();





// //     $('#origin-input').val(input());
