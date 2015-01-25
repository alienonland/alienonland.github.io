define(["knockout", "scripts/OrganizationViewModel"], function(ko, OrganizationVM) {
	return function JobViewModel(options) {
		var self = this;
		self.firm = new OrganizationVM({ name : options.companyName, website : options.website });
		self.title = ko.observable(options.title);
		self.startDate = ko.observable(options.startDate);
		self.endDate = ko.observable(options.endDate);
		self.dateRange = ko.pureComputed(function() {
			return self.startDate().toDateString() + ' - ' + (self.endDate() != null ? self.endDate().toDateString() : 'Present');  
		});	
		self.responsibilities = ko.observableArray(options.responsibilities);
		return self;
	};
});