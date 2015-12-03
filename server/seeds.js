// run this when the meteor app is started
Meteor.startup(function () {

	// if there are no orgs, create sample data

	if (Orgs.find().count() === 0) {

		// create sample org
		var sampleOrgs = [{}];

		// insert each sample org into database
		_.each(sampleOrgs, function(org) {
			Surveys.insert(org);
		});
	}	
});