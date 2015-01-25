define(["knockout"], function(ko) {
	return function OrganizationViewModel() {
		var self = this;
		self.name = ko.observable();
		self.website = ko.observable();
		return self;
	};
});