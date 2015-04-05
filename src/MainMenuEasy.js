Ball.MainMenuEasy = function(game) {
	
};
Ball.MainMenuEasy.prototype = {
	create: function() {
		this.add.sprite(0, 0, 'screen-mainmenu');
		this.add.sprite((320-221)/2, 40, 'title');
		this.startButton = this.add.button(320-320-10, 200, 'easy', this.startGame1, this, 1, 0, 2);
		//this.startButton = this.add.button(320-146, 200, 'medium', this.startGame2, this, 1, 0, 2);
		//this.startButton = this.add.button(320-240, 300, 'hard', this.startGame3, this, 1, 0, 2);
		
		// instructions = this.game.add.text(
		// 	60, 250, "Use arrow keys on desktop, \n  accelerometer on mobile",
		// 	{ font: "16px Arial", fill: "#b921fe", stroke: "#22053a", strokeThickness: 3 }
		// );
	},
	startGame1: function() {
		this.game.state.start('StoryHowtoEasy');
	}
};