const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "bf639f53admshf988df62756c1bcp1279a6jsn1e08bd79566b"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});