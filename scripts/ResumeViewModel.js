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
				"Lead techology campus recruiting program, new hire training, and summer internship program",
				"Lead web tier framework development across Blackstone's next gen web applications"

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
				"Team lead for Filings, Fixed Income, Solr (document search), Public Site, and Mobile functionalities",
				"Developed ASP.NET Web Forms pages and controls"
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
			],
			skills: [ 
				'ASP.NET MVC',
				'C#',
				'JavaScript',
				'jQuery / AJAX',
				'Bootstrap',
				'SQL Server / T-SQL',
				'HTML / CSS',
				'SASS',
				'Git / Mercurial / SVN',
				'Visual Studio',
				'IIS 7',
				'Knockout',
				'Highcharts'
			],
			interests: [
				'Data Visualization',
				'Macro Economics',
				'Baseball'],
			pastExperience: [ 
				'Objective-C / iOS development',
				'Lucene / Solr',
				'ASP.NET WebForms',
				'Umbraco CMS',
				'VB.NET',
				'XSLT / XSL-FO',
				'Apache FOP',
				'Processing'
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
		var caseInsensitiveSort = function(a,b){
			return (a.toLowerCase() > b.toLowerCase()) ? 1 : -1;
		};
		self.jobs = ko.observableArray(mapped.jobs());
		self.education = ko.observableArray(mapped.education());
		self.other = ko.observableArray();
		self.skills = mapped.skills().sort(caseInsensitiveSort);
		self.interests = mapped.interests().sort(caseInsensitiveSort);
		self.pastExperience = mapped.pastExperience().sort(caseInsensitiveSort);
		return self;
	};
});