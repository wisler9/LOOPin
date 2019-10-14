var queryURL = "https://cors-anywhere.herokuapp.com/http://api.amp.active.com/v2/search/?city=New+York&query=Martial+Arts&kids=true&per_page=50&sort=distance&exclude_children=false&api_key=jhrtpy8zkebapurfkht5xcq2";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);

    // const uniqueSet = new Set(response.results);

    for (let i = 0; i < response.results.length; i++) {
        var image = response.results[i].logoUrlAdr;
        var name = response.results[i].assetName;
        var address = response.results[i].place.addressLine1Txt;
        var city = response.results[i].place.cityName;
        var state = response.results[i].place.stateProvinceCode;
        
        
   
        $("#items").append("<img src=" + image + ">"+"<br>");
        $("#items").append(name,"<br>");
        $("#items").append(address, "<br>");
        $("#items").append(city, "<br>");
        $("#items").append(state, "<br>");
    }
  });
  

 