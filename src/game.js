/**
 * Created by edoardopedrotti on 21/12/15.
 */
Game = {

	map_grid: {
		width: 24,
		height: 16,
		tile: {
			width: 16,
			height: 16
		}
	},

	width: function () {
		return this.map_grid.width * this.map_grid.tile.width;
	},

	height: function () {
		return this.map_grid.height * this.map_grid.tile.height;
	},

	//initialize shit
	start: function () {

		Crafty.init(Game.width(), Game.height());
		Crafty.background('rgb(249, 223, 125)');

		Crafty.scene('Game');

	}
}