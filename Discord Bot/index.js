// GAME //

	const log = console.log; // SHORTCUT

	const NewGame = class {

		constructor () {

			let game = this;

			// loop properties //

			this.fps = 150; // ms

			this.score = 0; // scoore

			this.tick = 0;

			this.gameover = false;

			// world //

			this.w = 12;

			this.h = 10;

			// 12 collumns 10 rows

			// BLANK TEMPLATE

			/*this.map = [

				0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,

			];*/

			const maps = [

				[

				1,1,1,1,1,1,1,1,1,1,1,1,
				1,2,0,0,0,0,0,0,0,0,3,1,
				1,0,0,0,0,0,0,0,0,0,0,1,
				1,0,0,1,1,0,0,1,1,0,0,1,
				1,0,0,0,0,2,2,0,0,0,0,1,
				1,0,0,0,0,2,2,0,0,0,0,1,
				1,0,0,1,1,0,0,1,1,0,0,1,
				1,0,0,0,0,0,0,0,0,0,0,1,
				1,3,0,0,0,0,0,0,0,0,2,1,
				1,1,1,1,1,1,1,1,1,1,1,1,

				],

				[

				0,2,2,0,0,0,0,0,0,2,2,0,
				0,0,0,0,0,0,0,0,0,0,0,0,
				0,1,1,0,0,0,0,0,0,1,1,0,
				0,1,1,0,0,0,0,0,0,1,1,0,
				0,0,0,0,0,2,2,0,0,0,0,0,
				0,0,0,0,0,2,2,0,0,0,0,0,
				0,1,1,0,0,0,0,0,0,1,1,0,
				0,1,1,1,1,1,1,1,1,1,1,0,
				0,0,0,0,0,1,1,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,

				],

				[

				1,1,1,2,2,1,1,1,1,1,1,1,
				0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,
				1,2,2,1,1,1,1,1,1,1,3,1,
				0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,
				1,1,1,7,1,1,1,1,2,2,1,1,
				0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,
				1,1,1,2,2,1,1,1,1,1,1,1,

				],

				[

				1,1,1,1,1,0,0,1,1,1,1,1,
				1,0,0,0,1,0,0,1,0,0,0,1,
				1,0,2,0,0,0,0,0,0,2,0,1,
				1,0,0,0,1,0,0,1,0,0,0,1,
				1,1,1,0,1,0,0,1,0,1,1,1,
				0,0,0,0,1,0,0,1,0,0,0,0,
				1,1,1,0,1,7,3,1,0,1,1,1,
				1,0,0,0,1,1,1,1,0,0,0,1,
				1,0,0,0,2,2,2,2,0,0,0,1,
				1,1,1,1,1,0,0,1,1,1,1,1,

				],

				[

				1,1,1,1,1,0,1,1,1,1,1,1,
				1,0,0,0,0,0,0,1,0,0,0,1,
				1,0,2,0,0,0,0,1,0,2,0,1,
				1,0,2,0,0,0,0,0,0,2,0,1,
				1,0,0,0,0,0,0,0,0,0,0,1,
				1,1,1,0,0,2,2,0,0,0,0,1,
				1,0,0,0,0,2,2,0,0,0,0,1,
				0,0,2,2,0,0,0,0,1,0,0,0,
				1,0,0,0,0,0,0,0,1,0,0,1,
				1,1,1,1,1,0,1,1,1,1,1,1,

				]

			];

			let ind = Math.round (Math.random () * (maps.length - 1));

			this.map = Object.create (maps[ind]);

			this.map.death = [

				1,0,1,0,0,1,0,0,1,0,1,0,
				0,1,0,0,1,0,1,0,1,0,1,0,
				0,1,0,0,1,0,1,0,1,0,1,0,
				0,1,0,0,0,1,0,0,0,1,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,
				1,1,0,0,1,0,1,1,0,1,1,0,
				1,0,1,0,1,0,1,0,0,1,0,1,
				1,0,1,0,1,0,1,1,0,1,0,1,
				1,0,1,0,1,0,1,0,0,1,0,1,
				1,1,0,0,1,0,1,1,0,1,1,0,

			];

			this.map.reactions = {

				1: function (obj) {

					obj.move (-obj.vel.x, -obj.vel.y);

					return 1;

				},

				2: function (obj) {

					game.map[game.plr.ind] = 0;

					log (game.score += 10);

					return 1;

				},

				3: function (obj) {

					game.map[game.plr.ind] = 0;

					game.ents.length = 0;

					return 1;

				},

				7: function (obj) {

					game.map[game.plr.ind] = 0;

					log (obj.hp += 1);

				}

			};

			// controls //

			this.key = {}; // w a s d

			// ENTITIES //

			const NewEntity = class {

				constructor () {
	
					let ent = this;
			
					this.x = 0;
			
					this.y = 0;

					this.vel = {

						x: 0,

						y: 0

					};

					// properties

					this.hp = 3;

					// tile data //
			
					this.ind = 0;

					// char

					this.char = 5;

				}
	
			};
	
			NewEntity.prototype.move = function (x, y) {
	
				this.x = this.x + x;

				if (this.x >= game.w)
					this.x = 0;
				else if (this.x < 0)
					this.x = game.w - 1;
	
				this.y = this.y + y;

				if (this.y >= game.h)
					this.y = 0;
				else if (this.y < 0)
					this.y = game.h - 1;
	
				return this.ind = (this.y | 0) * game.w + (this.x | 0);
	
			};

			NewEntity.prototype.collideplr = function () {

				if (this.ind == game.plr.ind) {

					game.plr.hp--;

					console.log ('HIT', game.plr.hp);

					if (game.plr.hp <= 0) {

						game.plr.hp = 0;

						game.EndGame ();

					}

					return 1;

				}

				return 0;

			}

			this.ents = [];

			// player //

			this.plr = new NewEntity ();

			this.plr.char = 4;

			this.plr.upd = function () {

				// controls //

				this.vel.x = 0;

				this.vel.y = 0;

				if (game.key.d)
					this.vel.x = 1;
				else if (game.key.a)
					this.vel.x = -1;

				if (game.key.s)
					this.vel.y = 1;
				else if (game.key.w)
					this.vel.y = -1;

				// move //

				this.move (this.vel.x, this.vel.y);

				// collision //

				let til = game.map[this.ind];

				if (til)
					game.map.reactions[til] (this);

				return 0;

			};

			this.plr.move (3, 2);

			// ENEMIES //

			this.Enemies = []

			// zoomer //

			this.Enemies[0] = class extends NewEntity {

				constructor () {

					super ();
	
					// properties //
	
					this.howclose = 0.7; // 0 - 1
	
					// zoom data //
	
					this.tick = 0;
	
					this.max = 3;

					// char

					this.char = 5;

				}

			};

			this.Enemies[0].prototype.zoom = function () {

				this.move (

					(game.plr.x - this.x) * this.howclose,
					(game.plr.y - this.y) * this.howclose

				);

				return 0;

			};

			this.Enemies[0].prototype.upd = function () {

				// handle zoom //

				this.tick++;

				if (this.tick == this.max) {

					this.tick = 0;

					this.zoom ();

				};

				// collision //

				this.collideplr ();

				return 0;

			};

			// zombie //

			this.Enemies[1] = class extends NewEntity {

				constructor () {

					super ();

					// walk chance

					this.chance = 0.6; // 0 - 1

					// char

					this.char = 6;

				}

			};

			this.Enemies[1].prototype.zoom = function () {

				this.vel.x = 0;

				this.vel.y = 0;

				if (game.plr.x > this.x)
					this.vel.x = 1;
				else if (game.plr.x < this.x)
					this.vel.x = -1;

				if (game.plr.y > this.y)
					this.vel.y = 1;
				else if (game.plr.y < this.y)
					this.vel.y = -1;

				this.move (this.vel.x, this.vel.y);

				return 0;

			};

			this.Enemies[1].prototype.upd = function () {

				if (Math.random () > this.chance)
					this.zoom ();

				// collision

				let til = game.map[this.ind];

				if (til == 1)
					game.map.reactions[til] (this);

				this.collideplr ();

			};

			// EVENTS //

			this.evts = [
	
				22, // killer
	
				8, // zombie
	
				14, // zoomer
	
				24, // heart
	
				3, // money

				4 // score ++
	
			];
	
			this.evts.reactions = [

				// killer
				
				function () {
	
					game.SpawnTile (3);
	
				},

				// zombie

				function () {
	
					game.SpawnEntity (1);
	
				},

				// zoomer

				function () {
	
					game.SpawnEntity (0);
	
				},

				// heart

				function () {
	
					game.SpawnTile (7);
	
				},

				// money

				function () {
	
					game.SpawnTile (2);
	
				},

				function () {
	
					game.score ++;
	
				}
	
			];

		}

	};

	NewGame.tilechars = [

		{
			c: '⬛',
			d: 'BLANK SPACE: a tile anyone can walk through.'
		},

		{
			c: '⬜',
			d: 'WALL: a tile you can\'t walk through. zoomers can hover over them though.'
		},

		{
			c: '💰',
			d: 'MONEY: collect as many of these as you can to get points.'
		},

		{
			c: '✨',
			d: 'MAGIC: getting magic will kill ALL present enemies.'
		},

		{
			c: '🤠',
			d: 'YOU: move by sending W A S D to chat. your goal is to get that bag and survive the monsters.'
		},

		{
			c: '👿',
			d: 'ZOOMER: these enemies will zip towards you every 3 moves, so you gotta move fast.'
		},

		{
			c: '😡',
			d: 'ZOMBIE: these enemies will slowly walk towards you. in groups they are very deadly.'
		},

		{
			c: '❤️',
			d: 'HEART: collect these to increase your HP. there is no max HP so collect as much as you find.'
		},

	];

	NewGame.prototype.SpawnEntity = function (num) {

		let obj = new this.Enemies[num];

		obj.move (

			Math.floor (Math.random () * this.w),
			Math.floor (Math.random () * this.h)

		);

		if (obj.ind == this.plr.ind)
			return 0;

		this.ents.push (obj);

		return 1;

	};

	NewGame.prototype.SpawnTile = function (num) {

		let ind = Math.floor (Math.random () * this.map.length);

		while (this.map[ind])
			ind--;

		this.map[ind] = num;

		return 1;

	};

	NewGame.prototype.SpawnEvents = function () {

		let res = 0;

		for (let i = 0; i < this.evts.length; i ++) {

			if (this.tick % this.evts[i] == 0) {

				this.evts.reactions[i] ();

				res = 1;

			}

		}

		return res;

	};

	NewGame.prototype.RenderGame = function () {

		let x = 0;

		let str = '';

		let map;

		if (!this.gameover) {

			map = Object.create (this.map);
	
			map[this.plr.ind] = this.plr.char;
	
			for (let i = 0; i < this.ents.length; i++) {
	
				map[this.ents[i].ind] = this.ents[i].char;
	
			}

		}
		else {

			this.msg.channel.send (`${this.msg.author}\nyou died... do ${prefix}play to play again.`);

			map = Object.create (this.map.death);

		}

		for (let i = 0; i < this.map.length; i ++) {

			if (x >= this.w) {

				x = 0;

				str += '\n';

			}

			str += NewGame.tilechars[map[i]].c;

			x++;

		}

		this.msg.channel.send (`${this.msg.author}\n${str}\nHP: ${':heart:'.repeat (this.plr.hp)}\nSCORE: ${this.score}\n`);

		return 0;

	};

	NewGame.prototype.EndGame = function () {

		this.gameover = true;

		// remove references to message and player

		delete this.msg.author.playing;

		delete this.msg.author.ind;

		// remove references to game client

		delete clients[this.ind];

		// hopefully all garbage collected??

		console.log ('GAME ENDED');

	};

	NewGame.prototype.UpdateGame = function () {

		this.plr.upd ();

		for (let i = 0; i < this.ents.length; i ++) {

			this.ents[i].upd ();

		}

		this.SpawnEvents ();

		return 0;

	};

	NewGame.prototype.Iterate = function (msg) {

		this.msg = msg;

		this.tick ++;

		this.UpdateGame ();

		this.RenderGame ();

		return 0;

	};

	const clients = [];

// BOT //

const Discord = require ('discord.js');

const bot = new Discord.Client ();

const token = ''; // add ur own token here D:

// message logic //

const prefix = '\\';

const controls = ['w', 'a', 's', 'd'];

bot.on ('message', (m) => {

	if (m.author.playing) {

		for (let i = 0; i < controls.length; i++) {

			if (m.content.toLowerCase () == controls[i]) {

				clients[m.author.ind].key = {};

				clients[m.author.ind].key[controls[i]] = true;

				// run frame //

				clients[m.author.ind].Iterate (m);

				return 1;

			}
		}

	}

	if (!m.content.startsWith(prefix))
		return;

	const args = m.content.slice (prefix.length).toLowerCase ().split (' ');

	const command = args.shift ().toLowerCase ();

	switch (command) {

		case 'invite':

			m.channel.send ('https://discordapp.com/oauth2/authorize?client_id=738843551810715701&scope=bot&permissions=8');

			break;

		case 'help':

			let str = `${prefix}play: start playing.\n${prefix}stop: end current game.\n${prefix}invite: invite link for this bot.\n\n`;

			let til = NewGame.tilechars;

			for (let i = 0; i < til.length; i++) {

				str += `${til[i].c} ${til[i].d}\n\n`;

			}

			m.channel.send (`${m.author}\n\n${str}`);

			break;

		case 'play':

			if (m.author.playing) {

				m.channel.send (`you're already playing -_-. do ${prefix}stop to stop playing.`);

				return;
			}

			m.author.playing = true;

			let game = new NewGame ();

			// assign game client to message author

			m.author.ind = (clients.push (game)) - 1;

			clients[m.author.ind].ind = m.author.ind;

			clients[m.author.ind].Iterate (m);

			break;

		case 'stop':

			if (!m.author.playing) {

				m.channel.send (`you aint playing bruh. do ${prefix}play to play.`);

				return;

			}

			clients[m.author.ind].EndGame ();

			m.channel.send (`stopped playing`);

			break;

	}

	return 0;

});

/// staaart ///

bot.on('ready', () => {

	bot.user.setActivity(`${prefix}help | an adventure game played in discord`);

});

bot.login(token);
