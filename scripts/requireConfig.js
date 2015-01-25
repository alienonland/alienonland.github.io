requirejs.config({
	baseUrl:"/lib",
	shim: {
		"bootstrap" : { deps : ["jquery"] },
		"sammy" : {deps: ["jquery"] },
		"komapping" : { deps: ["knockout"], exports: "komapping" }
	},
	paths: {
		"templates" : "../templates",
		"scripts" : "../scripts",
		"knockout" : "knockout-3.2.0",
		"komapping": "knockout.mapping-latest",
		"sammy" : "sammy-latest.min",
		"jquery" : "https://code.jquery.com/jquery-2.1.3.min",
		"bootstrap" : "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min"
	}
});
requirejs(["knockout", "komapping"], function(ko, komapping) {
	ko.mapping = komapping;
});
requirejs(["scripts/main"]);