var queryURL = "http://api.amp.active.com/v2/search/?city=New+York&state=New+York&zip=10017&country=United+States&query=swimming&current_page=1&per_page=10&sort=distance&exclude_children=true&api_key=jhrtpy8zkebapurfkht5xcq2";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
  });