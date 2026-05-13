import { Engine, Font, Label, Vector } from "excalibur";

export default class Score extends Label {
    constructor(engine: Engine) {
        super({
            text: 'Score: 0',
            pos: new Vector(engine.drawWidth / 2, 25),
            font: new Font({ size: 30 }),
        })
    }
}