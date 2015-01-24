define([
 	"jquery", 
 	"bootstrap",
  	"knockout-3.2.0"], function($, bs, ko) {
  	ko.components.register('nav-bar-component', {
  		template: { require: 'text!templates/navbar.html'}
  	});
	ko.applyBindings();
});