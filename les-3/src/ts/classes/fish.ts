import { Engine, randomInRange, Vector } from "excalibur";
import { Resources } from "../resources";
import BaseActor from "./baseActor";

export default class Fish extends BaseActor {
    constructor() {
        super({
            width: 100,
            height: 100,
        });
    }

    onInitialize(engine: Engine): void {
        super.onInitialize(engine)

        this.graphics.use(Resources.Fish.toSprite())
        this.pos = new Vector(Math.random() * engine.screen.width, Math.random() * engine.screen.height)
        this.vel = new Vector(randomInRange(-100, 100), randomInRange(-100, 100))

        if (this.vel.x > 0) {
            this.graphics.flipHorizontal = true;
        }

        this.scale = new Vector(2, 2)

        this.events.on("exitviewport", () => this.fishLeft())
    }


    fishLeft(): void {
        this.pos = this.vel.x > 0
            ? new Vector(0, Math.random() * this.engine.screen.height)
            : new Vector(1350, Math.random() * this.engine.screen.height);
    }
}