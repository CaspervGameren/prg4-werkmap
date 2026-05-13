import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.ts'
import Fish from './classes/fish.ts'
import Shark from './classes/shark.ts'
import Bubble from './classes/bubble.ts'

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

    startGame() {
        console.log("start de game!")

        const backgroundActor = new Actor({
            x: this.screen.width / 2,
            y: this.screen.height / 2,
            width: this.screen.width,
            height: this.screen.height
        })
        const backgroundImage = Resources.Water.toSprite()
        const shark = new Shark()

        for (let i = 0; i < 30; i++) {
            const bubble = new Bubble();
            this.add(bubble);
        }

        backgroundActor.z = -99
        backgroundActor.graphics.use(backgroundImage)

        for (let i = 0; i < 20; i++) {
            const fish = new Fish()
            this.add(fish)
        }

        for (let actor of [backgroundActor, shark]) {
            this.add(actor)
        }
    }
}

new Game()
