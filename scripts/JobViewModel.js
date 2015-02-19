define(["knockout", "scripts/OrganizationViewModel"], function(ko, OrganizationVM) {
	return function JobViewModel(options) {
		var self = this;
		self.firm = new OrganizationVM({ name : options.companyName, website : options.website });
		self.title = ko.observable(options.title);
		self.startDate = ko.observable(options.startDate);
		self.endDate = ko.observable(options.endDate);
		self.dateRange = ko.pureComputed(function() {
			return (self.startDate().getMonth()+1) 
			+ '/' + self.startDate().getFullYear() 
			+ ' - ' 
			+ (self.endDate() != null ?
				(self.endDate().getMonth()+1) + '/' + self.endDate().getFullYear() :
				'Present');  
		});	
		self.responsibilities = ko.observableArray(options.responsibilities);
		return self;
	};
});