requirejs.config({
	baseUrl:"/lib",
	shim: {
		"bootstrap" : { deps : ["jquery"] },
		"sammy" : {deps: ["jquery"] }
	},
	paths: {
		"templates" : "../templates",
		"scripts" : "../scripts",
		"knockout" : "knockout-3.2.0",
		"sammy" : "sammy-latest.min",
		"jquery" : "https://code.jquery.com/jquery-2.1.3.min",
		"bootstrap" : "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min"
	}
});

requirejs(["scripts/main"]);