import { Actor, Engine } from "excalibur";

export default class BaseActor extends Actor {
    protected engine!: Engine

    onInitialize(engine: Engine): void {
        this.engine = engine
    }
}