//Organization collections
CategoryCodes = new Mongo.Collection( 'categoriesCodes' );

categoryCodeSchema = new SimpleSchema({
	//schema for category codes
	"categoryCode": {
		type: Number,
		label: "Category Codes",
		max: 100
	},
	"categoryGroup": {
		type: String,
		label: "Category Code Groupings"
	}
	"labelEnglish": {
		type: String,
		label: "label of Category Code in English",
	},
	"labelFrench": {
		type: String,
		label: "label of Category Code in French",
		optional: true
	}
});


CategoryCodes.attachSchema( categoryCodeSchema );