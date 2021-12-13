var cityVar;
var p1="https://api.weatherbit.io/v2.0/current?&city=";
var p2="&key=0bf451f91ff64705bc45ce2a4c766587&include=minutely";
const settings = {
	"async": true,
	"crossDomain": true,
	"url": cityVar,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "bf639f53admshf988df62756c1bcp1279a6jsn1e08bd79566b"
	}
};

$("#search_btn").on("click",function(event){
    console.log( $("#searchbox").val());
    cityVar=p1+ $("#searchbox").val()+p2;
    
    $.ajax(cityVar).done(function (response) {
        console.log(response);

    });
    console.log(cityVar);
});
