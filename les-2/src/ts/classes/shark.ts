import { Engine, Vector } from "excalibur";
import { Resources } from "../resources";
import BaseActor from "./BaseActor";

export default class Shark extends BaseActor {

    onInitialize(engine: Engine): void {
        super.onInitialize(engine)
        
        this.graphics.use(Resources.Shark.toSprite())
        this.pos = new Vector(700, 400)
        this.vel = new Vector(80, 0)
        this.events.on("exitviewport", () => this.sharkRight())
    }


    sharkRight() {
        this.pos = new Vector(0, Math.random() * this.engine.screen.height)
    }
}