import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

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


        const shark = new Actor()
        const backgroundActor = new Actor({
            x: this.screen.width / 2,
            y: this.screen.height / 2,
            width: this.screen.width,
            height: this.screen.height
        })
        const backgroundImage = Resources.Water.toSprite()

        backgroundActor.z = -99
        backgroundActor.graphics.use(backgroundImage)

        shark.graphics.use(Resources.Shark.toSprite())
        shark.pos = new Vector(700, 400)
        shark.vel = new Vector(80,0)
        shark.events.on("exitviewport", (e) => this.sharkRight(e))

        for(let i = 0; i < 20; i++) {
            const fish = new Actor()

            fish.graphics.use(Resources.Fish.toSprite())
            fish.pos = new Vector(Math.random() * this.screen.width, Math.random() * this.screen.height)
            fish.vel = new Vector(Math.random() * -90,0)
            fish.events.on("exitviewport", (e) => this.fishLeft(e))

            this.add(fish)
        }

        for(let actor of [backgroundActor, shark]) {
            this.add(actor)
        }
    }

    fishLeft(e) {
        e.target.pos = new Vector(1350, Math.random() * this.screen.height)
    }

    sharkRight(e) {
        e.target.pos = new Vector(0, Math.random() * this.screen.height)
    }
}

new Game()
