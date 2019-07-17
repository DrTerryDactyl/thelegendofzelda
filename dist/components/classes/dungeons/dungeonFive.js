import Dungeon from "./dungeons.js";
import { Vector } from "../math/vector.js";
export default class fifthDungeon extends Dungeon {
    constructor() {
        super('FifthDungeon', ["map", "compas", "recorder", "heartContainer", "shardFive"]);
        this.position = new Vector(2, 7);
        this.url = "https://raw.githubusercontent.com/miaklwalker/thelegendofzelda/master/images/dungeons/zelda-dungeon5.png";
    }
}
