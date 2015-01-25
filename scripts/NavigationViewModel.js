define(['knockout-3.2.0', 'sammy-latest.min'], function(ko, sammy) {
	var NavigationViewModel = function (){
		var self = this;
		self.currentPageComponent = ko.observable();

		sammy(function() {
			this.get('#Contact', function() {
				self.currentPageComponent('contact-component');
			});
			this.get('#Welcome', function() {
				self.currentPageComponent('welcome-component');
			});

			

			this.get('', function() { this.app.runRoute('get', '#Welcome') });
		}).run();
	};

	return { instance : new NavigationViewModel() };
});