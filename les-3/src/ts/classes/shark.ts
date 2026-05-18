import { Engine, Keys, Vector } from "excalibur";
import { Resources } from "../resources";
import BaseActor from "./BaseActor";
import Fish from "./fish";

export default class Shark extends BaseActor {

    constructor() {
        super({
            width: 150,
            height: 100,
        });
    }

    onInitialize(engine: Engine): void {
        super.onInitialize(engine)

        this.graphics.use(Resources.Shark.toSprite())
        this.pos = new Vector(700, 400)
        this.vel = new Vector(80, 0)
        // this.events.on("exitviewport", () => this.sharkRight())
        this.on("collisionstart", (e) => this.handleCollision(e))
    }

    onPreUpdate(engine: Engine, elapsed: number): void {
        let velY: number = 0
        let velX: number = 0

        if (engine.input.keyboard.isHeld(Keys.Right)) {
            velX += 150;
        }
        if (engine.input.keyboard.isHeld(Keys.Left)) {
            velX -= 150;
        }
        if (engine.input.keyboard.isHeld(Keys.Up)) {
            velY -= 150;
        }
        if (engine.input.keyboard.isHeld(Keys.Down)) {
            velY += 150;
        }

        this.vel = new Vector(velX, velY);
    }

    handleCollision(e: any): void {
        if (e.other.owner instanceof Fish) {
            e.other.owner.kill();
        }
    }


    // sharkRight() {
    //     this.pos = new Vector(0, Math.random() * this.engine.screen.height)
    // }
}