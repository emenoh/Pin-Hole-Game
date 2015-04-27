Ball.GameHard = function(game) {
	keys = null;
	ball = null;
	walls = null;
	timer = 0;
	totalTimer = 0;
	timer2 = 0;
	loop = null;
	firstRun = true;
	level = 1;
	//sfx_bounce = null;
	maxLevels = 5;
	audio = true;
	timer3 = 0;
	gamedif = 0;

};
Ball.GameHard.prototype = {
	create: function() {

		this.game.time.deltaCap = 0.016;

		this.add.sprite(0, 0, 'screen-bg');
		panel = this.add.sprite(0, 0, 'panel');
		panel.body.immovable = true;

		walls = this.game.add.group();
		walls.add(panel);

		pauseButton = this.add.button(320-36-8, 8, 'button-pause', this.managePause, this);
		//audioButton = this.add.button(320-36-8-36-8, 8, 'button-audio', this.manageAudio, this);
		//audioButton.animations.add('true', [0], 10, true);
		//audioButton.animations.add('false', [1], 10, true);
		//audioButton.animations.play(audio);

		timerText = this.game.add.text(15, 15, "Time: "+timer, { font: "24px Cambria", fill: "#ffff00" });
		levelText = this.game.add.text(120, 10, "Level: "+level, { font: "16px Cambria", fill: "#ffff00" });
		totalTimeText = this.game.add.text(120, 30, "Total time: "+totalTimer, { font: "16px Cambria", fill: "#ffff00" });
		fpsText = this.game.add.text(15,40, "fps: "+timer3, { font: "16px Cambria", fill: "#ffff00" });

		hole = this.add.sprite((320)/2, 90, 'hole');
		hole.body.immovable = true;
		hole.anchor.setTo(0.5, 0.5);
		hole.body.setCircle(5,15,15);

		ball = this.add.sprite((320)/2, 450, 'ball');
		ball.anchor.setTo(0.5, 0.5);
		ball.body.bounce.setTo(0.3, 0.3);
		ball.body.setCircle(11, 12, 12);
		ball.body.linearDamping = 1;
		ball.body.collideWorldBounds = true;

		keys = this.game.input.keyboard.createCursorKeys();
		window.addEventListener("deviceorientation", this.handleOrientation, true);
		/*if(!loop) {
			loop = this.game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);

			//loop = this.game.time.events.loop(1500, this.updateCounter, this);
			level = 1;
		}*/
		this.createLevel(level);

		//sfx_bounce = this.game.add.audio('bounce');
	},
	createLevel: function(lvl) {
		// create levels manually
		// TODO: import from level editor
		switch(lvl) {
			case 1: {
				//totalTimer=0;
				timer2=0;
				timer = 31;
				gamedif=2;
				
				walls.create((320-128)/2, (480-32)/2, 'mini-v').body.immovable = true;
				walls.create((320-128)/2, (480-32)/2, 'mini-h').body.immovable = true;
				walls.create((320-128)/2-64, (480-32)/2+64-16, 'mini-h').body.immovable = true;
				walls.create((320-128)/2+76, 480-64, 'mini-v').body.immovable = true;
				walls.create((320-128)/2+76-40, 480-64, 'mini-v').body.immovable = true;
				walls.create(0, 480-64, 'mini-h').body.immovable = true;
				walls.create(0+64, 480-64, 'mini-h').body.immovable = true;
				walls.create(0+64+64, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+64+24, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0+64, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+32, 480-64-39+16, 'mini-v').body.immovable = true;
				walls.create(0+64+64+64+32, 480-64-39+16+48, 'mini-h').body.immovable = true;
				walls.create((320-128)/2+64, (480-32)/2, 'mini-h').body.immovable = true;
				walls.create((320-128)/2+64+64, (480-32)/2, 'mini-h').body.immovable = true;
				walls.create((320-128)/2+64+64+64, (480-32)/2, 'mini-h').body.immovable = true;
				walls.create((320-128)/2+64-16, (480-32)/2, 'mini-v').body.immovable = true;
				walls.create((320-128)/2+64-16, (480-32)/2+64, 'mini-v').body.immovable = true;
				walls.create((320-128)/2+64+64+16, (480-32)/2+64+39, 'mini-v').body.immovable = true;
				walls.create((320-128)/2+64+64+10, (480-32)/2+64+39, 'mini-h').body.immovable = true;
				walls.create((320-128)/2+64+64+10+48, (480-32)/2+64+39-64, 'mini-v').body.immovable = true;
				walls.create((320-128)/2+64+64+20, (480-32)/2, 'mini-v').body.immovable = true;
				walls.create((320-128)/2+64+64-24, (480-32)/2, 'mini-v').body.immovable = true;
				walls.create((320-128)/2, (480-32)/2, 'mini-h').body.immovable = true;
				walls.create((320-128)/2-64, (480-32)/2+64-16+40, 'mini-h').body.immovable = true;
				walls.create((320-128)/2-64, (480-32)/2+64-16+40, 'mini-v').body.immovable = true;
				walls.create(320-128, (480-32)/2+64-16+40, 'mini-v').body.immovable = true;
				walls.create(320-128-94, (480-32)/2+64-16+40, 'mini-v').body.immovable = true;
				
				break;
			}
			case 2: {
				timer = 24;
				this.game.paused =! this.game.paused;
				this.game.paused =! this.game.paused;
				walls.create((320-128)/2, (480-32)/2, 'mini-v').body.immovable = true;
				walls.create((320-128)/2, (480-32)/2, 'mini-h').body.immovable = true;
				walls.create((320-128)/2-64, (480-32)/2+64-16, 'mini-h').body.immovable = true;
				walls.create((320-128)/2+76, 480-64, 'mini-v').body.immovable = true;
				walls.create((320-128)/2+76-40, 480-64, 'mini-v').body.immovable = true;
				walls.create(0, 480-64, 'mini-h').body.immovable = true;
				walls.create(0+64, 480-64, 'mini-h').body.immovable = true;
				walls.create(0+64+64, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+64+24, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0+64, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+32, 480-64-39+16, 'mini-v').body.immovable = true;
				walls.create(0+64+64+64+32, 480-64-39+16+48, 'mini-h').body.immovable = true;
				walls.create((320-128)/2+64, (480-32)/2, 'mini-h').body.immovable = true;
				walls.create((320-128)/2+64+64, (480-32)/2, 'mini-h').body.immovable = true;
				walls.create((320-128)/2+64+64+64, (480-32)/2, 'mini-h').body.immovable = true;
				walls.create((320-128)/2+64-16, (480-32)/2, 'mini-v').body.immovable = true;
				walls.create((320-128)/2+64-16, (480-32)/2+64, 'mini-v').body.immovable = true;
				walls.create((320-128)/2+64+64+16, (480-32)/2+64+39, 'mini-v').body.immovable = true;
				walls.create((320-128)/2+64+64+10, (480-32)/2+64+39, 'mini-h').body.immovable = true;
				walls.create((320-128)/2+64+64+10+48, (480-32)/2+64+39-64, 'mini-v').body.immovable = true;
				walls.create((320-128)/2+64+64+20, (480-32)/2, 'mini-v').body.immovable = true;
				walls.create((320-128)/2+64+64-24, (480-32)/2, 'mini-v').body.immovable = true;
				walls.create((320-128)/2, (480-32)/2, 'mini-h').body.immovable = true;
				walls.create((320-128)/2-64, (480-32)/2+64-16+40, 'mini-h').body.immovable = true;
				walls.create((320-128)/2-64, (480-32)/2+64-16+40, 'mini-v').body.immovable = true;
				walls.create(320-128, (480-32)/2+64-16+40, 'mini-v').body.immovable = true;
				walls.create(320-128-94, (480-32)/2+64-16+40, 'mini-v').body.immovable = true;
				//
				//walls.create(320-128-94, (480-32)/2+64-16+40-200, 'mini-v').body.immovable = true;
				walls.create(0, (480-32)/2+64-16+40-180, 'mini-h').body.immovable = true;
				walls.create(0, (480-32)/2+64-16+40-80, 'mini-h').body.immovable = true;
				walls.create(0+33, (480-32)/2+64-16+40-(80+24+16), 'mini-h').body.immovable = true;
				walls.create(320-128-94-3, (480-32)/2+64-16+40-200+64-14, 'mini-v').body.immovable = true;
				//walls.create(0+64, (480-32)/2+64-16+40-200, 'mini-h').body.immovable = true;
				walls.create(0+64, (480-32)/2+64-16+40-200, 'mini-h').body.immovable = true;
				walls.create(0+81, (480-32)/2+64-16+40-200, 'mini-h').body.immovable = true;
				walls.create(0, (480-32)/2+64-16+40-200+7, 'mini-h').body.immovable = true;
				walls.create(0+64+64+10, (480-32)/2+64-16+40-200, 'mini-v').body.immovable = true;
				walls.create(0+64+64+10, (480-32)/2+64-16+40-200, 'mini-h').body.immovable = true;
				walls.create(0+64+64+10+64, (480-32)/2+64-16+40-200, 'mini-v').body.immovable = true;
				walls.create(0+64+64+10+64, (480-32)/2+64-16+40-200+64, 'mini-h').body.immovable = true;
				walls.create(0+64+64+10+64+64, (480-32)/2+64-16+40-200+16, 'mini-v').body.immovable = true;
				walls.create(0+64+64+10+64+64, (480-32)/2+64-16+40-200+16-20, 'mini-v').body.immovable = true;

				break;
			}
			case 3: {
				timer = 24;
				this.game.paused =! this.game.paused;
				this.game.paused =! this.game.paused;
								walls.create(0, (480-32)/2+64-16+40-180, 'mini-h').body.immovable = true;
				walls.create(0, (480-32)/2+64-16+40-80, 'mini-h').body.immovable = true;
				walls.create(0+33, (480-32)/2+64-16+40-(80+24+16), 'mini-h').body.immovable = true;
				walls.create(320-128-94-3, (480-32)/2+64-16+40-200+64-14-16, 'mini-v').body.immovable = true;
				//walls.create(0+64, (480-32)/2+64-16+40-200, 'mini-h').body.immovable = true;
				walls.create(0+64, (480-32)/2+64-16+40-200, 'mini-h').body.immovable = true;
				//walls.create(0+81, (480-32)/2+64-16+40-200, 'mini-h').body.immovable = true;
				walls.create(0, (480-32)/2+64-16+40-200+7, 'mini-h').body.immovable = true;
				//walls.create(0+64+64+10, (480-32)/2+64-16+40-200, 'mini-v').body.immovable = true;
				walls.create(0+64+64, (480-32)/2+64-16+40-200, 'mini-h').body.immovable = true;
				//walls.create(0+64+64+10+64, (480-32)/2+64-16+40-200, 'mini-v').body.immovable = true;
				walls.create(0+64+64+10+64, (480-32)/2+64-16+40-200+64, 'mini-h').body.immovable = true;
				walls.create(0+64+64+10+64+64, (480-32)/2+64-16+40-200+16, 'mini-v').body.immovable = true;
				walls.create(0+64+64+10+64+64, (480-32)/2+64-16+40-200+16-20, 'mini-v').body.immovable = true;
				walls.create(0+64+64+10+64-64, (480-32)/2+64-16+40-200+64, 'mini-h').body.immovable = true;
				walls.create(0+64+64+10+64-64-32, (480-32)/2+64-16+40-200+64, 'mini-h').body.immovable = true;
				walls.create(0+64+64+10+64-64-32+64+22, (480-32)/2+64-16+40-200-29, 'mini-v').body.immovable = true;
				walls.create((320/2)+64+40-64-40-128+128+64, 480-64-64-48-32-179, 'mini-v').body.immovable = true;

				walls.create((320/2), 480-64, 'mini-h').body.immovable = true;
				walls.create((320/2)-64, 480-64, 'mini-h').body.immovable = true;
				walls.create((320/2)-64, 480-64+48, 'mini-h').body.immovable = true;
				walls.create((320/2), 480-64+48, 'mini-h').body.immovable = true;
				walls.create((320/2)-64-64, 480-64+48, 'mini-h').body.immovable = true;
				walls.create((320/2)-64-64, 480-64+24, 'mini-v').body.immovable = true;
				walls.create((320/2)+64, 480-64, 'mini-h').body.immovable = true;
				walls.create((320/2)+64, 480-64+48, 'mini-h').body.immovable = true;
				walls.create((320/2)-64-64, 480-64-64, 'mini-v').body.immovable = true;
				walls.create((320/2)-64-64, 480-64-64, 'mini-h').body.immovable = true;
				walls.create((320/2)-64, 480-64-64, 'mini-h').body.immovable = true;
				walls.create((320/2), 480-64-64, 'mini-h').body.immovable = true;
				walls.create((320/2)+64, 480-64-64-48, 'mini-v').body.immovable = true;
				walls.create((320/2)+64+40, 480-64-64-48, 'mini-v').body.immovable = true;
				walls.create((320/2)+64+40, 480-64-64-48+64, 'mini-v').body.immovable = true;
				walls.create((320/2)+64+40, 480-64-64-48-64, 'mini-v').body.immovable = true;
				walls.create((320/2)+64+40, 480-64-64-48-64-64, 'mini-v').body.immovable = true;
				walls.create((320/2)+64+40, 480-64-64-48-64-64, 'mini-h').body.immovable = false;
				walls.create((320/2)+64+40-64-40, 480-64-64-48, 'mini-h').body.immovable = true;
				walls.create((320/2)+64+40-64-40-64, 480-64-64-48, 'mini-h').body.immovable = true;
				walls.create((320/2)+64+40-64-40-128, 480-64-64-48, 'mini-h').body.immovable = true;
				walls.create((320/2)+64+40-64-40-128, 480-64-64-48-32, 'mini-v').body.immovable = true;
				walls.create((320/2)+64+40-64-40-128+128+64, 480-64-64-48-32, 'mini-v').body.immovable = true;
				walls.create((320/2)+64+40-64-40-128+128+64-64, 480-64-64-48-32-64, 'mini-v').body.immovable = true;
				walls.create((320/2)+64+40-64-40-128+128+64-64, 480-64-64-48-32-64, 'mini-h').body.immovable = true;
				walls.create((320/2)+64+40-64-40-128+128+64-64-64, 480-64-64-48-32-64+64-16, 'mini-h').body.immovable = true;

				break;
			}
			case 4: {
				timer = 24;
				this.game.paused =! this.game.paused;
				this.game.paused =! this.game.paused;
				walls.create((320-128)/2+76, 480-64, 'mini-v').body.immovable = true;
				walls.create((320-128)/2+76-40, 480-64, 'mini-v').body.immovable = true;
				walls.create(0, 480-64, 'mini-h').body.immovable = true;
				walls.create(0+64, 480-64, 'mini-h').body.immovable = true;
				walls.create(0+64+64, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0, 480-64-39, 'mini-h').body.immovable = false;
				walls.create(0+64, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+64+24, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64, 480-64-39-64, 'mini-v').body.immovable = true;
				walls.create(0+64+64+64, 480-64-39-64, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+64+22, 480-64-39-64, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+64+22, 480-64-39-64-64, 'mini-v').body.immovable = true;
				walls.create(0+64+64+64+64+22-64, 480-64-39-64-40, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+64+22-64, 480-64+50, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+64+22-64, 480-64, 'mini-v').body.immovable = true;
				walls.create(0+64+64+64+64+22-64+40, 480-64+30-25, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64, 480-64-39-64-40, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64, 480-64-39-64-40, 'mini-v').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64-39, 480-64-39-64-40+40, 'mini-v').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64-64, 480-64-39-64-40, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64-64-39, 480-64-39-64-40+40, 'mini-v').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64-64-39, 480-64-39-64-40+40-64, 'mini-v').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64-64-39, 480-64-39-64-40+40-64-64, 'mini-v').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64-64-39, 480-64-39-64-40+40-64-64-64, 'mini-v').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64-64-39, 480-64-39-64-40+40-64-64-64-64, 'mini-v').body.immovable = false;
				walls.create(0+64+64+64+64+22-64-64-64-39+16, 480-64-39-64-40+40-64-16, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64-64-39+16+64, 480-64-39-64-40+40-64-16-64+16, 'mini-v').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64-64-39+16+64+38, 480-64-39-64-40+40-64-16-64+16, 'mini-v').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64-64-39+16+64, 480-64-39-64-40+40-64-16-64+16-39, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64-64-39+16+64-64, 480-64-39-64-40+40-64-16-64+16-39, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64-64-39+16+64-64+64+64, 480-64-39-64-40+40-64-16-64+16-39, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64-64-39+16+64-64+64+64+64+23, 480-64-39-64-40+40-64-16-64+16-39, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64-64-39+16+64-64+64+64+64-16, 480-64-39-64-40+40-64-16-64+16-39, 'mini-v').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64-64-39+16+64-64+64+64+64-16, 480-64-39-64-40+40-64-16-64+16-39+64, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64-64-39+16+64-64+64+64+64-16, 480-64-39-64-40+40-64-16-64+16-39+64-128, 'mini-v').body.immovable = true;
				walls.create(0+64+64+64+64+22-64-64-64-39+16+64-64+64+64+64-16-54, 480-64-39-64-40+40-64-16-64+16-39+64+40, 'mini-h').body.immovable = true;
				
				break;
			}
			case 5: {
				timer = 24;
				this.game.paused =! this.game.paused;
				this.game.paused =! this.game.paused;
				walls.create((320-128)/2, (480-32)/2, 'mini-v').body.immovable = true;
				walls.create((320-128)/2, (480-32)/2, 'mini-h').body.immovable = true;
				walls.create((320-128)/2-64, (480-32)/2+64-16, 'mini-h').body.immovable = true;
				walls.create((320-128)/2+76+10, 480-64, 'mini-v').body.immovable = true;
				//walls.create((320-128)/2+76-40, 480-64, 'mini-v').body.immovable = true;
				//walls.create(0, 480-64, 'mini-h').body.immovable = true;
				walls.create(0+64, 480-64, 'mini-h').body.immovable = true;
				walls.create(0+64+64, 480-64, 'mini-h').body.immovable = true;
				walls.create(0+64+64-42, 480-64+24, 'mini-h').body.immovable = true;
				walls.create(0+64+64-42-60, 480-64+24-22, 'mini-v').body.immovable = true;
				walls.create(0+64+64, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+64+24, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0+64, 480-64-39, 'mini-h').body.immovable = true;
				walls.create(0+64+64+64+32, 480-64-39+16, 'mini-v').body.immovable = true;
				walls.create(0+64+64+64+32, 480-64-39+16+48, 'mini-h').body.immovable = true;
				walls.create((320-128)/2+64, (480-32)/2, 'mini-h').body.immovable = true;
				walls.create((320-128)/2+64+64, (480-32)/2, 'mini-h').body.immovable = true;
				walls.create((320-128)/2+64+64+64, (480-32)/2, 'mini-h').body.immovable = true;
				walls.create((320-128)/2+64-16, (480-32)/2, 'mini-v').body.immovable = true;
				walls.create((320-128)/2+64-16, (480-32)/2+64, 'mini-v').body.immovable = true;
				walls.create((320-128)/2+64+64+16, (480-32)/2+64+39, 'mini-v').body.immovable = true;
				walls.create((320-128)/2+64+64+10, (480-32)/2+64+39, 'mini-h').body.immovable = true;
				walls.create((320-128)/2+64+64+10+48, (480-32)/2+64+39-64, 'mini-v').body.immovable = true;
				walls.create((320-128)/2+64+64+20, (480-32)/2, 'mini-v').body.immovable = true;
				walls.create((320-128)/2+64+64-24, (480-32)/2, 'mini-v').body.immovable = true;
				walls.create((320-128)/2, (480-32)/2, 'mini-h').body.immovable = true;
				walls.create((320-128)/2-64, (480-32)/2+64-16+40, 'mini-h').body.immovable = true;
				walls.create((320-128)/2-64, (480-32)/2+64-16+40, 'mini-v').body.immovable = true;
				walls.create(320-128, (480-32)/2+64-16+40, 'mini-v').body.immovable = true;
				walls.create(320-128-94, (480-32)/2+64-16+40, 'mini-v').body.immovable = true;
				
				walls.create(0, 110, 'mini-h').body.immovable = false;
				walls.create(64, 112, 'mini-h').body.immovable = true;
				walls.create(64+64+20, 110, 'mini-h').body.immovable = true;
				walls.create(64+64+20+64, 110, 'mini-h').body.immovable = true;
				walls.create(64+64+20+64+64, 110, 'mini-h').body.immovable = true;
				walls.create(64+64+20-35-32-64, 110-64, 'mini-v').body.immovable = false;
				walls.create(64+64+20-35-64, 110-64, 'mini-v').body.immovable = false;
				walls.create(64+64+20-35-32, 110-64, 'mini-v').body.immovable = false;
				walls.create(64+64+20-35, 110-64, 'mini-v').body.immovable = false;
				walls.create(64+64+20-35+64, 110-64, 'mini-v').body.immovable = false;
				walls.create(64+64+20-35+64+32, 110-64, 'mini-v').body.immovable = false;
				walls.create(64+64+20-35+64+32+32, 110-64, 'mini-v').body.immovable = false;
				walls.create(64+64+20-35+64+32+64, 110-64, 'mini-v').body.immovable = false;
				walls.create(64+64+20-35+64+32+64+32, 110-64, 'mini-v').body.immovable = false;

				walls.create(0, 110+38, 'mini-h').body.immovable = true;
				walls.create(64, 110+38, 'mini-h').body.immovable = true;
				walls.create(128, 110+38, 'mini-h').body.immovable = true;
				walls.create(128+64, 110+38, 'mini-h').body.immovable = true;
				walls.create(128+64+64-24, 110+38, 'mini-h').body.immovable = true;

				walls.create(24, 110+38+38, 'mini-h').body.immovable = true;
				walls.create(64, 110+38+38, 'mini-h').body.immovable = true;
				walls.create(128, 110+38+38, 'mini-h').body.immovable = true;
				walls.create(128+64, 110+38+38, 'mini-h').body.immovable = true;
				walls.create(128+128, 110+38+38, 'mini-h').body.immovable = true;

				walls.create(24, 110+38+38+38, 'mini-h').body.immovable = true;
				break;
			}
			case 6:{
				timer = 11;
				this.game.paused =! this.game.paused;
				
			
			break;
			}
			case 7:{
				
				timer = 11;
				this.game.paused =! this.game.paused;
				
			break;
			}
			
			case 8:
			{
				timer = 11;
				this.game.paused =! this.game.paused;
				
			
			break;
			}
			case 9:
			{	
				
				timer = 11;
				this.game.paused =! this.game.paused;
			
			
			break;
			}
			case 10:
			{
				
				timer = 11;
				this.game.paused =! this.game.paused;
				
			
			break;
			}
			default: {
				break;
			}
		}
	},
	updateCounter: function() {
		timer=timer-(timer3/timer3);
		timer2++;
		timerText.content = "Time: "+timer;
		totalTimeText.content = "Total time: "+(totalTimer+timer2);
		if(timer==0)
		{
			//this.game.add.text(320/3, 480/2, "GAMEOVER", { font: "36px Cambria", fill: "#ffff00" });
			this.game.state.start('GameOver',true,false,gamedif);
			//this.game.paused =! this.game.paused;
			//this.buttonContinue = this.add.button(0, 0, 'gameover', this.mainM, this);
			totalTimer=0;
			timer=0;
			timer2=0;
			level=1;
			//this.buttonContinue = this.add.button(0, 0, 'screen-howtoplay', this.game.state.start('MainMenu');, this);
		}
	},
	mainM: function(){
		this.game.state.start('MainMenu');
	},
	managePause: function() {
		this.game.paused =! this.game.paused;
	},
	manageAudio: function() {
		// turn on/off the audio
		audio =! audio;
		audioButton.animations.play(audio);
		console.log('audio: '+audio);
	},
	update: function() {

		if(!loop) {
			//loop = this.game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
			
			loop = this.game.time.events.loop(1000, this.updateCounter, this);
			level = 1;
		}


		timer3 = this.game.time.fps;
		fpsText.content = "FPS: "+timer3;
		


		var force = 10;
		if(keys.left.isDown) {
			ball.body.velocity.x += force;
		}
		else if(keys.right.isDown) {
			ball.body.velocity.x -= force;
		}
		if(keys.up.isDown) {
			ball.body.velocity.y += force;
		}
		else if(keys.down.isDown) {
			ball.body.velocity.y -= force;
		}

		this.game.physics.collide(ball, walls, this.wallCollision, null, this);
		this.game.physics.collide(ball, hole, this.finishLevel, null, this);
	},
	wallCollision: function() {
		//sfx_bounce.play();
	},
	finishLevel: function() {
		if(level >= maxLevels) {
			//totalTimer += timer;
			//alert('Congratulations, game completed!\nTotal time of play: '+totalTimer+' seconds! exit the game');
			alert('Congratulations,HARD game completed!\nTotal Timer:'+timer2+'\nAmazing You really Beat the Hard game?\nNow go and raise your head it must be numb :)');
			//timer = 0;
			level = 1;
			//totalTimer = 0;
			gamedone = true;
			this.game.state.start('MainMenu2');
		}
		else {
			alert('Congratulations, level '+level+' completed!\nTotal time:'+timer2+'');
			this.game.paused =! this.game.paused;
			timer = 0;
			level++;
			totalTimeText.content = "Total time: "+totalTimer;
			levelText.content = "Level: "+level;
			this.game.state.start('GameHard');
		}
	},
	handleOrientation: function(e) {
		//var x = e.gamma; // range [-90,90]
		//var y = e.beta;  // range [-180,180]

		var x = e.accelerationIncludingGravity.x;
		var y = e.accelerationIncludingGravity.y;

		ball.body.velocity.x += x;
		ball.body.velocity.y += -y;
	}
};