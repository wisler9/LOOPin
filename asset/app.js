var queryURL = "https://cors-anywhere.herokuapp.com/http://api.amp.active.com/v2/search/?city=New+York&query=kids=true&per_page=5&sort=distance&exclude_children=false&api_key=jhrtpy8zkebapurfkht5xcq2";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);

    // const uniqueSet = new Set(response.results);
    // var topic = ["Dance"]; // , "Music", "Sports", "Classes", "Outdoor", "Martial Arts"


    // for (topic = 0; topic < response.results.length; topic++) {
    for (let i = 0; i < response.results.length; i++) {
         /*
        var image = response.results[topic].logoUrlAdr;
        var name = response.results[topic].assetName;
        var address = response.results[topic].place.addressLine1Txt;
        var city = response.results[topic].place.cityName;
        var state = response.results[topic].place.stateProvinceCode;
        var phone = response.results[topic].contactPhone;
        var latitude = response.results[topic].place.latitude;
        var longitude = response.results[topic].place.longitude;
        */
       
        var image = response.results[i].logoUrlAdr;
        var name = response.results[i].assetName;
        var address = response.results[i].place.addressLine1Txt;
        var city = response.results[i].place.cityName;
        var state = response.results[i].place.stateProvinceCode;
        var phone = response.results[i].contactPhone;
        var latitude = response.results[i].place.latitude;
        var longitude = response.results[i].place.longitude;
       
        
        
        $("#items").append("<img src=" + image + ">"+"<br>");
        $("#items").append(name,"<br>");
        $("#items").append(address, "<br>");
        $("#items").append(city, "<br>");
        $("#items").append(state, "<br>");
        $("#items").append(phone, "<br>");
        $("#items").append(latitude, "<br>");
        $("#items").append(longitude, "<br>");
    }
  });
  

//   Martial Arts, Dance, Music, Sports, Classes, Outdoor

// http://api.amp.active.com/v2/search/?city=New+York&query=Martial+Arts%2C+Dance%2C+Music%2C+Sports%2C+Classes%2C+Outdoor&kids=true&per_page=120&sort=distance&exclude_children=false&api_key=jhrtpy8zkebapurfkht5xcq2