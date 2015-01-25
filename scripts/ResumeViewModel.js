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
				"Technical lead for BXAccess, Blackstone's industry leading investor portal",
				"Lead techology campus recruitng program",
				"Lead web tier framework development"

				]
			},
			{
				title: 'Senior Software Engineer',
				companyName: 'S&P Capital IQ',
				website: 'http://www.spcapitaliq.com',
				startDate: new Date(2007, 5, 25),
				endDate: new Date(2012, 1, 3),
				responsibilities: 
				[
				"Team lead for Filings, Fixed Income and Mobile functionalities"
				]
			}
			],
			education: [
			{
				title: 'BS in Computer Science & Economics',
				companyName: 'Rensselaer Polytechnic Institute',
				website: 'http://www.rpi.edu',
				startDate: new Date(2003, 8),
				endDate: new Date(2007, 4)
			}
			]
		};

		var mapping = {
			'jobs': {
				create : function(options) {
					return new jobVM(options.data);
				}
			},
			'education' : {
				create: function(options) {
					return new jobVM(options.data);
				}
			}
		};

		var self = this;
		var mapped = ko.mapping.fromJS(resume,mapping);
		self.jobs = ko.observableArray(mapped.jobs());
		self.education = ko.observableArray(mapped.education());
		self.other = ko.observableArray();
		return self;
	};
});