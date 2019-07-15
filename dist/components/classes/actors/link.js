import { Vector } from "../math/vector.js";
/**
 *
 *
 * @export
 * @class Link
 * @description Will encapsulate Link , including health , position
 */
export default class Link {
    constructor() {
        this.hearts = 3;
        this.health = 3;
        this.position = new Vector(8, 5);
    }
    show(context, Images) {
    }
}
