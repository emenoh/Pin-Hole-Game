Ball.GameOver = function(game){};

Ball.GameOver.prototype = {
	
	create:function(){
	//if(gamedone!=true)
	//{
		if(gamedif==0)
			{
			//easyText = this.game.add.text(15, 15, "Easy", { font: "24px Cambria", fill: "#ffff00" });
			this.buttonContinue = this.add.button(0, 0, 'gameover', this.startGame1, this);

			}
		else if(gamedif==1)
			{
			//mediumText = this.game.add.text(15, 15, "Medium", { font: "24px Cambria", fill: "#ffff00" });
			this.buttonContinue = this.add.button(0, 0, 'gameover', this.startGame2, this);
			}
		else if(gamedif==2)
			{
			//HardText = this.game.add.text(15, 15, "Hard", { font: "24px Cambria", fill: "#ffff00" });
			this.buttonContinue = this.add.button(0, 0, 'gameover', this.startGame3, this);
			}
	//}
	/*else
		{
		endGame = this.game.add.text(15, 15, "Game Completed", { font: "24px Cambria", fill: "#ffff00" });
		this.buttonContinue = this.add.button(0, 0, 'gameover', this.startGame, this);
		}*/

/*	},
	create: function() {
		
		this.showGameOver();
	},
	showGameOver: function() {
		
		this.buttonContinue = this.add.button(0, 0, 'gameover', this.startGame, this);
		
		// this.game.add.tween(this.buttonContinue).to({x: (320-179)/2}, 300, Phaser.Easing.Exponential.Out, true, 0, false);
	},
		startGame: function() {
		this.game.state.start('MainMenu');
	}*/
	},
	startGame1: function(){
		this.game.state.start('MainMenuEasy');
	},
	startGame2: function(){
		this.game.state.start('MainMenuMedium');
	},
	startGame3: function(){
		this.game.state.start('MainMenuHard');
	},
	startGame: function(){
		this.game.state.start('MainMenu2');
	}
}
