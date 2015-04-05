Ball.StoryHowtoHard = function(game) {
	// buttonContinue = null;
	// state = null;
};
Ball.StoryHowtoHard.prototype = {
	create: function() {
		
		this.showHowto();
	},
	
	showHowto: function() {
		//this.game.add.text(15, 15, "Underconstruction ", { font: "24px Cambria", fill: "#ffff00" });

		this.buttonContinue = this.add.button(0, 0, 'screen-howtoplay', this.startGame, this);
		
	},
	startGame: function() {
		this.game.state.start('GameHard');
	}
};