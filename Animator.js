class Animator {

	constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
		Object.assign(this, (spritesheet, xStart, yStart, width, height, frameCount, frameDuration));

		this.elapsedTime = 0;
		this.totalTime = frameCount * frameDuration;
	};

	drawFrame(tick, ctx, x, y) {

		console.log(tick);
		console.log(this.xStart);

		this.elapsedTime += tick;
		const frame = this.currentFrame();

		ctx.drawImage(ASSET_MANAGER.getAsset("./LinkSpriteSheet.png"),
			this.xStart + this.width*frame, this.yStart,
			this.width, this.height,
			x, y,
			this.width, this.height);

	};

	currentFrame() {
		return Math.floor(this.elapsedTime / this.frameDuration);
	}

	isDone() {
		return (this.elapsedTime >= this.totalTime);
	}
}
