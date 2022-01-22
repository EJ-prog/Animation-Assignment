const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./LinkSpriteSheet.png");
ASSET_MANAGER.queueDownload("./tilingrocksunlit.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled=false;

	gameEngine.addEntity(new LinkSprite(gameEngine));
	gameEngine.addEntity(new background());

	gameEngine.init(ctx);

	gameEngine.start();
});
