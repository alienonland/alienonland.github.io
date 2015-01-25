define([
 	"jquery", 
 	"bootstrap",
  	"knockout-3.2.0",
  	"domReady!",
  	"scripts/NavigationViewModel"
  		], function($, bs, ko, doc,  navVM) {
  	ko.components.register('nav-bar-component', {
  		template: { require: 'text!templates/navbar.html'},
  		viewModel: { require : 'scripts/NavigationViewModel'}
  	});
  	ko.components.register('welcome-component', {
		template: { require: 'text!templates/welcome.html' },
		viewModel: { require: 'scripts/NavigationViewModel' }
  	});
  	ko.components.register('contact-component', {
		template: { require: 'text!templates/contact.html' },
		viewModel: { require: 'scripts/NavigationViewModel' }
  	});
	ko.applyBindings(navVM.instance);
});