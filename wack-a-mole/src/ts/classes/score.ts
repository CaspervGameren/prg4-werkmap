import { Engine, Font, Label, Vector } from "excalibur";

export default class Score extends Label {
    score: number = 0;

    constructor(engine: Engine) {
        super({
            text: 'Score: 0',
            pos: new Vector(engine.drawWidth / 2, 25),
            font: new Font({ size: 30 }),
        })
    }

    incScore(): void {
        this.score++
        this.text = `Score: ${this.score}`;
    }

    decScore(): void {
        this.score--
        this.text = `Score: ${this.score}`;
    }
}