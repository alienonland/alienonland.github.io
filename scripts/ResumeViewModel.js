define(["knockout"], function(ko) {
	return function ResumeViewModel() {
		var self = this;
		self.jobs = ko.observableArray();
		self.education = ko.observableArray();
		self.other = ko.observableArray();
		return self;
	};
});