define(["knockout"], function(ko) {
	return function OrganizationViewModel(options) {
		var self = this;
		self.name = ko.observable(options.name);
		self.website = ko.observable(options.website);
		return self;
	};
});