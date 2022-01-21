class Link {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./LinkSpriteSheet.png"), 0, 0, 125, 100, 10, 0.5);
	};

	update() {

	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);
	};
}