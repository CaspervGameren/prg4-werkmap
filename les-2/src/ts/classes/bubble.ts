import { Engine, Vector } from "excalibur";
import { Resources } from "../resources";
import BaseActor from "./BaseActor";

export default class Bubble extends BaseActor {

    onInitialize(engine: Engine): void {
        super.onInitialize(engine)
        
        this.graphics.use(Resources.Bubble.toSprite());
        this.pos = new Vector(Math.random() * engine.screen.width, engine.screen.height)
        this.vel = new Vector(0, Math.random() * -90 - 20);
        this.events.on("exitviewport", () => this.bubbleReset())
    }


    bubbleReset() {
        this.pos = new Vector(Math.random() * this.engine.screen.width, this.engine.screen.height)
    }
}