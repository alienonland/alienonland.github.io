define(['knockout', 'sammy-latest.min'], function(ko, sammy) {
	var NavigationViewModel = function (){
		var self = this;
		self.currentPageComponent = ko.observable();
		self.activeTab = ko.observable();

		self.isHome = ko.pureComputed(function () {
			return self.activeTab() === "home";
		});

		self.isContact = ko.pureComputed(function () {
			return self.activeTab() === "contact";
		});

		self.isResume = ko.pureComputed(function () {
			return self.activeTab() === "resume";
		});

		sammy(function() {
			this.get('#Contact', function() {
				self.currentPageComponent('contact-component');
				self.activeTab("contact");
			});
			this.get('#Welcome', function() {
				self.currentPageComponent('welcome-component');
				self.activeTab("home");
			});
			this.get('#Resume', function() {
				self.currentPageComponent('resume-component');
				self.activeTab("resume");
			});
			this.get('', function() { this.app.runRoute('get', '#Welcome') });
		}).run();
	};

	return { instance : new NavigationViewModel() };
});