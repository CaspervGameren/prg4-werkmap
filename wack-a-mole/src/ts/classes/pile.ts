import { Actor, Engine } from "excalibur";
import { Resources } from "../resources";
import Score from "../classes/score";

export class Pile extends Actor {

    isMole: Boolean = false;
    scoreLabel: Score;

    constructor(scoreLabel: Score) {
        super();
        this.scoreLabel = scoreLabel;
    }

    onInitialize(engine: Engine): void {
        super.onInitialize(engine);
        const isMole = Math.random() > 0.5;

        if (isMole) {
            this.graphics.use(Resources.Mole.toSprite());
        } else {
            this.graphics.use(Resources.DirtPile.toSprite());
        }

        this.pos.x = Math.random() * engine.drawWidth;

        this.pos.y = Math.random() * engine.drawHeight;

        this.on('pointerdown', () => {
            if (isMole) {
                this.scoreLabel.incScore();
                this.isMole = false;
                this.graphics.use(Resources.Mole.toSprite());
            } else {
                this.scoreLabel.incScore();
            }
        });
    }

    onPostUpdate(engine: Engine, elapsed: number): void {
        if (!this.isMole) {
            if (Math.random() < 0.001) {
                this.isMole = true;
                this.graphics.use(Resources.Mole.toSprite());
            }
        }
    }
}