define(["knockout"], function(ko) {
	ko.components.register('nav-bar-component', {
  		template: { require: 'text!templates/navbar.html'},
  		viewModel: { require : 'scripts/NavigationViewModel'}
  	});
  	ko.components.register('welcome-component', {
		template: { require: 'text!templates/welcome.html' },
		viewModel: { require: 'scripts/NavigationViewModel' }
  	});
  	ko.components.register('contact-component', {
		template: { require: 'text!templates/contact.html' },
		viewModel: { require: 'scripts/NavigationViewModel' }
  	});
  	ko.components.register('resume-component', {
		template: { require: 'text!templates/resume.html' },
		viewModel: { require: 'scripts/ResumeViewModel' }
  	});
});