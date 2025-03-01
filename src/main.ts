import makeCanvas from './components/functions/canvas.js';
import Game from './components/classes/systems/game.js';
import loadJson from './components/functions/getjson.js';
import {
	exportTiles,
	showTileMap,
} from './components/functions/createTileMap.js';
import { createTerrain } from './components/functions/collisionDetection.js';

let canvas = makeCanvas() as HTMLCanvasElement;
let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
let game: Game;

async function preload() {
	let data = await loadJson('../json/game.json');
	game = new Game(512, 480, data);
	game.loadFiles();
	let button = document.createElement('button');
	button.innerText = 'Play Game';
	document.body.appendChild(button);
	button.addEventListener('click', () => {
		game.gameState.currentMap.theme.play();
		setup();
		document.body.removeChild(button);
	});
}

function setup() {
	let index = `${game.gameState.currentMap.position.x},${
		game.gameState.currentMap.position.y
	}`;
	canvas.width = 512;
	canvas.height = 480;
    document.body.appendChild(canvas);
    //@ts-ignore
	createTerrain(ctx, game.json.tileMap[index]);
	exportTiles();
	draw();
}

function draw() {
	game.makeGameScreen(ctx);
	loop();
}

function loop() {
	requestAnimationFrame(draw);
}

preload();
