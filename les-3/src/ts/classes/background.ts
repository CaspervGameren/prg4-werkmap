import { Actor, Engine } from "excalibur";
import { Resources } from "../resources";

export default class Background extends Actor {
    constructor(engine: Engine) {
        super({
            x: engine.screen.width / 2,
            y: engine.screen.height / 2,
            width: engine.screen.width,
            height: engine.screen.height
        })
    }

    onInitialize(engine: Engine): void {
        const backgroundImage = Resources.Water.toSprite()
        this.z = -99
        this.graphics.use(backgroundImage)
    }
}