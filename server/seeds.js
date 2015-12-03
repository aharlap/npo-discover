// run this when the meteor app is started
Meteor.startup(function () {

	// if there are no orgs, create sample data

	if (CategoryCodes.find().count() === 0) {

		// sample data in seeds/categoryCodes.js

		// insert each sample code into database
		_.each(categoryCodes2013 function(categoryCode) {
			CategoryCodes.insert(categoryCode);
		});
	}	
});