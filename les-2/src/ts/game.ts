import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.ts'
import Fish from './classes/fish.ts'
import Shark from './classes/shark.ts'
import Bubble from './classes/bubble.ts'
import Background from './classes/background.ts'

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    onInitialize(engine: Engine): void {
        const backgroundActor = new Background(engine)

        this.add(backgroundActor);
    }

    startGame() {
        console.log("start de game!")
        const shark = new Shark()

        for (let i = 0; i < 30; i++) {
            const bubble = new Bubble();
            this.add(bubble);
        }



        for (let i = 0; i < 20; i++) {
            const fish = new Fish()
            this.add(fish)
        }

        this.add(shark)
    }
}

new Game()
