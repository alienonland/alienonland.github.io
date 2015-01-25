define([
 	"jquery", 
 	"bootstrap",
  "knockout",
  "domReady!",
  "scripts/ComponentRegistration",
  "scripts/NavigationViewModel"
  ], 
  function($, bs, ko, doc, comp, navVM) {
	  ko.applyBindings(navVM.instance);
  }
);