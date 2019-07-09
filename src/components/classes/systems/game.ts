import showImage from "../../functions/drawImage.js";
import Hud from "./hud.js"
import gameState from "./gameState.js";
import Link from "../actors/link.js";

export default class Game {
    width: number;
    height: number;
    gameState: gameState;
    hud: Hud;
    Link: Link;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.gameState = new gameState()
        this.Link = new Link()
        this.hud = new Hud(this.gameState.inventory,this.Link)
    }
    makeGameScreen(
        canvas: HTMLCanvasElement,
        context: CanvasRenderingContext2D,
    ) {
        canvas.width = this.width;
        canvas.height = this.height;
        document.body.appendChild(canvas);
        this.hud.show(context,this);
     
    }
    startScreen(context: CanvasRenderingContext2D) {}
}