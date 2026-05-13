import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.ts'

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

        for(let i = 0; i < 30; i++) {
            const bubble = new Actor();
            bubble.graphics.use(Resources.Bubble.toSprite());
            bubble.pos = new Vector(Math.random() * this.screen.width, this.screen.height)
            bubble.vel = new Vector(0, Math.random() * -90 -20);
            bubble.events.on("exitviewport", (e) => this.bubbleReset(e))

            this.add(bubble);
        }

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
            fish.vel = new Vector(randomInRange(-100, 100), randomInRange(-100, 100))

            if(fish.vel.x > 0) {
                fish.graphics.flipHorizontal = true;
            }

            fish.scale = new Vector(2, 2)


            fish.events.on("exitviewport", (e) => this.fishLeft(e))

            this.add(fish)
        }

        for(let actor of [backgroundActor, shark]) {
            this.add(actor)
        }
    }

    bubbleReset(e: any) {
        e.target.pos = new Vector(Math.random() * this.screen.width, this.screen.height)
    }

    fishLeft(e: any) {
        e.target.pos = new Vector(1350, Math.random() * this.screen.height)
    }

    sharkRight(e: any) {
        e.target.pos = new Vector(0, Math.random() * this.screen.height)
    }
}

new Game()
