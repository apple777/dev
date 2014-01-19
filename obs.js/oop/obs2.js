// abilitis

// 1 - Man
// 2 - Michael
// 3 - Nadav


Man = Class.extend({
	init: function(isInnovating) {
		// body...
		this.innovating = isInnovating;
	},
	innovate: function() {

		return this.innovating;
	}


});

Michael = Man.extend({
	
	init: function() {
		this._super( false );
		// body...
	},
	innovate: function() {
		return this._super();
	},
	create: function() {
		return true;
	},



});

Nadav = Man.extend({
	develop: function() {
		
		// body...
	}


});