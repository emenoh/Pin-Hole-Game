Ball.GameMedium = function(game) {
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
	maxLevels = 10;
	audio = true;
	timer3 = 0;
	gamedif = 0;
};
Ball.GameMedium.prototype = {
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
				timer = 11;
				gamedif=1;
	
				walls.create(190,320,'element-w').body.immovable = true;
				walls.create(0,320,'element-w').body.immovable = true;
				walls.create((320-128)/2, (480-32)/2, 'element-w').body.immovable = true;
				walls.create(256, 150, 'element-h').body.immovable = true;
				walls.create(40, 150, 'element-h').body.immovable = true;
				break;
			}
			case 2: {
				
				timer = 11;
				this.game.paused =! this.game.paused;
				this.game.paused =! this.game.paused;
				walls.create(190,320,'element-w').body.immovable = true;
				walls.create(0,320,'element-w').body.immovable = true;
				walls.create((320-128)/2, (480-32)/2+40, 'element-w').body.immovable = true;
				walls.create(256, 150, 'element-h').body.immovable = true;
				walls.create(40, 150, 'element-h').body.immovable = true;
				walls.create(206, 118, 'element-w').body.immovable = true;
				walls.create(0, 118, 'element-w').body.immovable = true;
				walls.create(256/2+14.5, 113, 'element-h').body.immovable = true;
				break;
			}
			case 3: {
				timer = 11;
				this.game.paused =! this.game.paused;
				this.game.paused =! this.game.paused;
				walls.create(0+32, 480-128-17, 'element-w').body.immovable = true;
				walls.create(0, 240, 'element-h').body.immovable = true;
				walls.create(195-32, 240, 'element-w').body.immovable = true;
				walls.create(290, 240, 'element-h').body.immovable = true;
				walls.create(195, 148-48, 'element-w').body.immovable = true;
				walls.create(0, 148-48, 'element-w').body.immovable = true;
				walls.create(0, 240, 'element-w').body.immovable = true;
				walls.create(135, 480-128-17, 'element-w').body.immovable = true;
				walls.create(110, 240-48-24, 'element-w').body.immovable = true;
				break;
			}
			case 4: {
				
				timer = 11;
				this.game.paused =! this.game.paused;
				this.game.paused =! this.game.paused;
				walls.create(220-32, 480-128, 'element-h').body.immovable = true;
				walls.create(92, 480-128-32, 'element-w').body.immovable = true;
				walls.create(0, 240+24, 'element-w').body.immovable = true;
				walls.create(128, 240+24, 'element-w').body.immovable = true;
				walls.create(256, 240+24, 'element-h').body.immovable = true;
				walls.create(180, 52, 'element-h').body.immovable = true;
				walls.create(180-70, 52, 'element-h').body.immovable = true;
				walls.create(24, 360, 'element-w').body.immovable = true;
				walls.create(220-32-60, 480-128+68, 'element-h').body.immovable = true;
			
				break;
			}
			case 5: {
				timer = 13;
				this.game.paused =! this.game.paused;
				this.game.paused =! this.game.paused;
				walls.create(220-32, 480-128, 'element-h').body.immovable = true;
				walls.create(92, 480-128-32, 'element-w').body.immovable = true;
				walls.create(0, 240+24, 'element-w').body.immovable = true;
				walls.create(128, 240+24, 'element-w').body.immovable = true;
				walls.create(256, 240+24, 'element-h').body.immovable = true;
				walls.create(128+24, 240+24-60, 'element-w').body.immovable = true;
				walls.create(0+24, 240+24-60, 'element-w').body.immovable = true;
				walls.create(128+24+128, 240+24-60, 'element-w').body.immovable = true;
				walls.create(128, 240+24-60-24-32, 'element-w').body.immovable = true;
				walls.create(0, 240+24-60-24-32, 'element-w').body.immovable = true;
				walls.create(128+128+24, 240+24-60-24-32, 'element-w').body.immovable = true
				walls.create(24, 360, 'element-w').body.immovable = true;
				walls.create(220-32-60, 480-128+68, 'element-h').body.immovable = true;
				
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
			//gamedif=2;
			//this.game.add.text(320/3, 480/2, "GAMEOVER", { font: "36px Cambria", fill: "#ffff00" });
			this.game.state.start('GameOver',true,false,gamedif);
			//this.game.paused =! this.game.paused;
			//this.buttonContinue = this.add.button(0, 0, 'gameover', this.mainM, this);
			//gamedif=2;
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
			ball.body.velocity.x -= force;
		}
		else if(keys.right.isDown) {
			ball.body.velocity.x += force;
		}
		if(keys.up.isDown) {
			ball.body.velocity.y -= force;
		}
		else if(keys.down.isDown) {
			ball.body.velocity.y += force;
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
			alert('Congratulations, Medium game completed!\nTotal time:'+timer2+'\nGo beat the hard mode!');
			timer = 0;
			level = 1;
			totalTimer = 0;
			this.game.state.start('MainMenuHard');
		}
		else {
			alert('Congratulations, level '+level+' completed!\nTotal time:'+timer2+'');
			this.game.paused =! this.game.paused;
			timer = 0;
			level++;
			totalTimeText.content = "Total time: "+totalTimer;
			levelText.content = "Level: "+level;
			this.game.state.start('GameMedium');
		}
	},
	handleOrientation: function(e) {
		var x = e.gamma; // range [-90,90]
		var y = e.beta;  // range [-180,180]
		ball.body.velocity.x += x/2;
		ball.body.velocity.y += y;
	}
};