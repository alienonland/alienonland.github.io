define(["knockout", "komapping", "scripts/JobViewModel"], function(ko, kom, jobVM) {
	return function ResumeViewModel() {
		var resume = {
			jobs: [
			{
				title: 'Assistant Vice President',
				companyName: 'Blackstone',
				website: 'http://www.blackstone.com',
				startDate: new Date(2012, 1, 6),
				endDate: null,
				responsibilities: 
				[
				"Architecture and development of ASP.NET MVC web pages",
				"Lead techology campus recruitng program",
				"Lead web tier framework development"

				]
			},
			{
				title: 'Senior Software Engineer',
				companyName: 'S&P Capital IQ',
				website: 'http://www.spcapitaliq.com',
				startDate: new Date(2007, 5, 25),
				endDate: new Date(2012, 1, 3)
			}
			]
		};

		var mapping = {
			'jobs': {
				create : function(options) {
					return new jobVM(options.data);
				}
			}
		};

		var self = this;
		var mapped = ko.mapping.fromJS(resume,mapping);
		self.jobs = ko.observableArray(mapped.jobs());
		self.education = ko.observableArray();
		self.other = ko.observableArray();
		return self;
	};
});